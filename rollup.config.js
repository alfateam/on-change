import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
	input: './mjs/index.js',
	output: {
		file: './cjs/index.js',
		format: 'commonjs',
		exports: 'auto'
	},
	plugins: [commonjs(), nodeResolve({browser: true})]
};