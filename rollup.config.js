import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
	input: 'index.esm.js',
	output: {
		file: 'index.js',
		format: 'commonjs',
		exports: 'auto'
	},
	plugins: [commonjs(), nodeResolve({browser: true})]
};