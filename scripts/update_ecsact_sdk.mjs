import {readJson, writeJson} from 'fs-extra/esm';
import * as path from 'path';

const workspaceDir = process.env['BUILD_WORKSPACE_DIRECTORY'];
const firebaseJsonPath = path.resolve(workspaceDir, 'firebase.json');

async function main() {
	const firebaseJson = await readJson(firebaseJsonPath);

	console.log(firebaseJson);

	const latestRes = await fetch(
		`https://api.github.com/repos/ecsact-dev/ecsact_sdk/releases/latest`,
	);
	const latestResJson = await latestRes.json();

	for (const asset of latestResJson.assets) {
		const downloadUrl = new URL(asset.browser_download_url);
		const websiteSourcePath = '/' + path.basename(downloadUrl.pathname);
		const index = firebaseJson.hosting.redirects.findIndex(
			r => r.source === websiteSourcePath,
		);
		if (index === -1) {
			console.log(`Adding new asset: ${websiteSourcePath}`);
			firebaseJson.hosting.redirects.unshift({
				source: websiteSourcePath,
				destination: downloadUrl.toString(),
				type: 302,
			});
		} else {
			console.log(
				`Updating asset ${websiteSourcePath} destination: ${downloadUrl.toString()}`,
			);
			firebaseJson.hosting.redirects[index].destination =
				downloadUrl.toString();
		}
	}

	await writeJson(firebaseJsonPath, firebaseJson, {spaces: 2});
}

main();
