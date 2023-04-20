import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import {babel} from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';

export default {
	input: '../DevRoot/myApp.jsx',
	output: {
		name: 'myApp',
		file: '../BuildRoot/myApp.js',
		format: 'iife'
	},
	plugins: ([
		replace({'process.env.NODE_ENV': JSON.stringify('development'), preventAssignment: true}),
		nodeResolve(),
		commonjs(),
		babel({presets: ['@babel/preset-react'], babelHelpers: 'bundled'})
	])
}
