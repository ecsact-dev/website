const runfiles = require(process.env['BAZEL_NODE_RUNFILES_HELPER']);

class IBazelPlugin {
	/** @param compiler {import("webpack").Compiler} */
	apply(compiler) {
		process.stdin.on('data', chunk => {
			const chunkString = chunk.toString();
			if (chunkString === 'IBAZEL_BUILD_COMPLETED SUCCESS') {
				// TODO(zaucy): reload webpack dev server
			}
		});
	}
}

exports.plugins = [new IBazelPlugin()];
// ibazel takes care of watching for files
exports.watch = false;
exports.devtool = 'eval-source-map';
exports.devServer = {
	historyApiFallback: true,
	port: 3000,
	static: [
		{directory: runfiles.resolve(`${runfiles.workspace}/src/static_files`)},
		{directory: runfiles.resolve(`${runfiles.workspace}/src/static_files_dev`)},
	],
};
