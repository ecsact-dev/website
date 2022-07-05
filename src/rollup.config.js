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
		// Angulars AOT triggers this warning
		if (warning.code === 'THIS_IS_UNDEFINED') {
			return;
		}

		throw new Error(warning.message);
	},
};
