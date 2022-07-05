const {nodeResolve} = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

export default {
	plugins: [
		nodeResolve({
			mainFields: ['browser', 'es2015', 'module', 'jsnext:main', 'main'],
		}),
		commonjs(),
	],
	onwarn: warning => {
		throw new Error(warning.message);
	},
};
