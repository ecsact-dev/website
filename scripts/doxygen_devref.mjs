import Listr from 'listr';
import * as path from 'path';
import download from 'download';
import * as yauzl from 'yauzl';
import {
	writeFile,
	readFile,
	mkdir,
	rm,
	rmdir,
	readdir,
	copyFile,
	rename,
} from 'fs/promises';
import {createWriteStream, existsSync, createReadStream} from 'fs';
import {promisify} from 'util';
import {execa} from 'execa';
import * as crypto from 'crypto';

const workspaceDir = process.env['BUILD_WORKSPACE_DIRECTORY'];
const devRefDir = path.resolve(workspaceDir, 'src/assets/_devref');

async function getSha256(filePath) {
	const hash = crypto.createHash('sha256');
	await new Promise((resolve, reject) => {
		createReadStream(filePath)
			.on('error', reject)
			.on('end', resolve)
			.on('data', function (chunk) {
				try {
					hash.update(chunk);
				} catch (err) {
					reject(err);
				}
			});
	});

	return hash.digest('hex');
}

function repoDevRefDir(repo) {
	return path.resolve(devRefDir, repo.name);
}

function repoJsonPath(repo) {
	return path.resolve(repoDevRefDir(repo), 'repo.json');
}

function stripPrefix(prefix, str) {
	if (str.startsWith(prefix)) {
		str = str.substring(prefix.length);
	}

	if (str.startsWith('/')) {
		str = str.substring(1);
	}

	return str;
}

function repoArchivePath(repo) {
	const url = new URL(repo.url);
	return path.resolve(
		repoDevRefDir(repo),
		repo.name + '-' + path.basename(url.pathname),
	);
}

async function downloadRepoArchive(repo, task) {
	task.title = `Downloading ${repo.url}`;

	const archivePath = repoArchivePath(repo);

	if (existsSync(archivePath)) {
		task.skip(`${path.relative(workspaceDir, archivePath)} already exists`);
	} else {
		await download(repo.url, repoDevRefDir(repo));
	}

	task.title = `Checking SHA256`;
	const sha256 = await getSha256(archivePath);
	if (repo.sha256 && sha256 !== repo.sha256) {
		throw new Error(
			`Expected SHA256 to be ${repo.sha256} for ${archivePath}, but instead got ${sha256}`,
		);
	}

	task.title = `Downloaded ${repo.url}`;

	if (!repo.sha256) {
		task.title += ` sha256=${sha256}`;
	}
}

async function extractRepoArchive(repo, task) {
	const devRefDir = repoDevRefDir(repo);
	const archivePath = repoArchivePath(repo);

	task.title = `Extracting ${archivePath}`;

	for (const existingFile of await readdir(devRefDir)) {
		const existingPath = path.resolve(devRefDir, existingFile);
		if (existingPath != archivePath) {
			task.title = `Removing old path: ${existingPath}`;
			await rm(existingPath, {recursive: true, force: true});
		}
	}

	const zip = await promisify(yauzl.open)(archivePath, {
		lazyEntries: true,
		autoClose: false,
	});

	const endPromise = new Promise((resolve, reject) => {
		zip.on('entry', async entry => {
			try {
				const devRefRelPath = stripPrefix(repo.stripPrefix, entry.fileName);
				if (devRefRelPath) {
					const entryPath = path.join(devRefDir, devRefRelPath);

					if (entryPath.endsWith('/')) {
						task.title = `Creating directory ${devRefRelPath}`;
						await mkdir(entryPath);
						zip.readEntry();
					} else {
						task.title = `Creating file ${devRefRelPath}`;

						zip.openReadStream(entry, (err, readStream) => {
							if (err) {
								reject(err);
								return;
							}
							const writeStream = createWriteStream(entryPath);
							writeStream.on('error', reject);

							readStream.on('end', () => {
								zip.readEntry();
								writeStream.close();
							});

							readStream.pipe(writeStream);
						});
					}
				} else {
					zip.readEntry();
				}
			} catch (err) {
				reject(err);
				return;
			}
		});

		zip.on('error', reject);
		zip.once('end', () => {
			zip.close();
			resolve();
		});
	});

	zip.readEntry();

	await endPromise;

	await rm(archivePath);

	task.title = `Extracted ${archivePath}`;
}

async function generateCompileCommands(repo, task) {
	const dir = repoDevRefDir(repo);
	await execa('bazel', ['run', '@hedron_compile_commands//:refresh_all'], {
		cwd: dir,
	});
}

async function runDoxygen(repo, task) {
	const dir = repoDevRefDir(repo);
	const doxyfilePath = path.resolve(dir, 'Doxyfile');
	if (!existsSync(doxyfilePath)) {
		const commonDoxyFilePath = path.resolve(workspaceDir, 'scripts/Doxyfile');
		task.title = `Copying ${commonDoxyFilePath} -> ${doxyfilePath}`;
		await copyFile(commonDoxyFilePath, doxyfilePath);
	}

	task.title = `Running doxygen in ${dir}`;
	await execa('doxygen', [doxyfilePath], {
		cwd: dir,
	});

	const doxygenOut = path.resolve(dir, '.doxygen');
	if (!existsSync(doxygenOut)) {
		throw new Error(`${doxygenOut} does not exist`);
	}

	for (const existingFile of await readdir(dir)) {
		if (existingFile != 'repo.json') {
			const existingPath = path.resolve(dir, existingFile);
			if (!existingPath.startsWith(doxygenOut)) {
				task.title = `Removing: ${existingPath}`;
				await rm(existingPath, {recursive: true, force: true});
			}
		}
	}

	const doxygenXmlOut = path.resolve(doxygenOut, 'xml');
	for (const doxygenXmlOutFile of await readdir(doxygenXmlOut)) {
		const extname = path.extname(doxygenXmlOutFile);
		const doxygenFilePath = path.resolve(doxygenXmlOut, doxygenXmlOutFile);
		if (extname === '.xml') {
			const newDoxygenFilePath = path.resolve(dir, doxygenXmlOutFile);
			task.title = `Moving ${doxygenFilePath} -> ${newDoxygenFilePath}`;
			await rename(doxygenFilePath, newDoxygenFilePath);
		} else {
			task.title = `Removing ${doxygenFilePath}`;
			await rm(doxygenFilePath);
		}
	}

	await rmdir(doxygenXmlOut);
	await rmdir(doxygenOut);

	task.title = `Doxygen finished`;
}

async function writeRepoJson(repo, task) {
	await writeFile(repoJsonPath(repo), JSON.stringify(repo));
}

function isRepoSame(a, b) {
	return (
		a.name === b.name &&
		a.url === b.url &&
		a.sha256 === b.sha256 &&
		a.stripPrefix === b.stripPrefix
	);
}

async function main() {
	let force = false;
	for (const arg of process.argv) {
		if (arg === '--force') {
			force = true;
		}
	}

	const repos = [
		{
			name: 'ecsact_runtime',
			sha256:
				'f7b5f5cc5b70620934be48090048e9092dbc86ba4e027959d65fd1dd46c36a77',
			stripPrefix: 'ecsact_runtime-475cae75c657b2570b1041264670c026de412814',
			url: 'https://github.com/ecsact-dev/ecsact_runtime/archive/475cae75c657b2570b1041264670c026de412814.zip',
		},
		{
			name: 'ecsact_interpret',
			sha256:
				'ac3fb03b584ec226bb2d240621e7a539339fbfd6dc2131580109c35f3b11f461',
			stripPrefix: 'ecsact_interpret-d014d7aa30ee2a1ac5086773a6c3477451671acd',
			url: 'https://github.com/ecsact-dev/ecsact_interpret/archive/d014d7aa30ee2a1ac5086773a6c3477451671acd.zip',
		},
	];

	const tasks = new Listr(
		repos.map(repo => {
			const repoTasks = [
				{
					title: 'Download Archive',
					task: async (ctx, task) => {
						await downloadRepoArchive(repo, task);
					},
				},
				{
					title: 'Extract Archive',
					task: async (ctx, task) => {
						await extractRepoArchive(repo, task);
					},
				},
				{
					title: 'Generate compile_commands.json',
					task: async (ctx, task) => {
						await generateCompileCommands(repo, task);
					},
				},
				{
					title: 'Run doxygen',
					task: async (ctx, task) => {
						await runDoxygen(repo, task);
					},
				},
				{
					title: 'Write repo.json',
					task: async (ctx, task) => {
						await writeRepoJson(repo, task);
					},
				},
			];

			return {
				title: repo.name,
				skip: async () => {
					if (force) return;

					const jsonPath = repoJsonPath(repo);
					let existingRepo = null;
					if (existsSync(jsonPath)) {
						try {
							existingRepo = JSON.parse(
								await readFile(jsonPath, {encoding: 'utf8'}),
							);
						} catch (err) {
							console.error(err.message);
						}
					}

					if (existingRepo) {
						if (isRepoSame(repo, existingRepo)) {
							return 'Already fetched';
						}
					}
				},
				task: () =>
					new Listr(repoTasks, {concurrent: false, showSubtasks: true}),
			};
		}),
		{
			showSubtasks: true,
			concurrent: false,
		},
	);

	await tasks.run();
}

main();
