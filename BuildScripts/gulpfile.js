const {src, dest, parallel} = require('gulp');
const less = require('gulp-less');
const cleanCss = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const terser = require('gulp-terser');

function buildDevJs ()
{
}

function buildProdJs ()
{
	return src('../BuildRoot/myApp.js')
	.pipe(terser())
	.pipe(dest('../BuildRoot'));
}

function buildDevCss ()
{
	return src('../DevRoot/myApp.less')
	.pipe(less())
	.pipe(dest('../BuildRoot'));
}

function buildProdCss ()
{
	return src('../DevRoot/myApp.less')
	.pipe(less())
	.pipe(cleanCss())
	.pipe(dest('../BuildRoot'));
}

function buildDevHtml ()
{
	return src('../DevRoot/myApp.html')
	.pipe(dest('../BuildRoot'));
}

function buildProdHtml ()
{
	return src('../DevRoot/myApp.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(dest('../BuildRoot'));
}

exports.buildDevJs = buildDevJs;
exports.buildProdJs = buildProdJs;

exports.buildDevHtml = buildDevHtml;
exports.buildProdHtml = buildProdHtml;

exports.buildDevCss = buildDevCss;
exports.buildProdCss = buildProdCss;

exports.buildDev = parallel(buildDevHtml, buildDevCss);
exports.buildProd = parallel(buildProdHtml, buildProdCss);
