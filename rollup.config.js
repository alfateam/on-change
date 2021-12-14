import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
	input: 'index.mjs',
	output: {
		file: 'index.cjs',
		format: 'commonjs',
		exports: 'auto'
	},
	plugins: [commonjs(), nodeResolve({browser: true})]
};