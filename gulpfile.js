'use strict'

const path = require('path')
const gulp = require('gulp')
const del = require('del')
const stylus = require('gulp-stylus')

const myPath = {
	src: './src/',
	dist: './dist/',
}
const FILENAME = 'zero'

gulp.task('clean', function (cb) {
	del([
		path.join(myPath.dist, '*.*'),
	], {
		force: true
	}, function (err, deletedFiles) {
		var infoTitle = '[clean] deleted: '
		if (deletedFiles.length) {
			console.log(infoTitle)
			console.log(deletedFiles.join('\n'))
		} else {
			console.log(infoTitle + '(no files).')
		}

		cb()
	})
})

gulp.task('css', function () {
	var styl = stylus({
		linenos: false,
		compress: false,
		errors: true,
	})
	var src = path.join(myPath.src, FILENAME + '.styl')
	var dist = path.join(myPath.dist, FILENAME + '.css')
	return gulp.src(src)
		.pipe(styl)
		.pipe(gulp.dest(myPath.dist))
		.on('end', function () {
			console.log('[css] compiling stylus: ' + src)
			console.log('[css] output css: ' + dist)
		})
		.on('error', function (err) {
			console.error(err.message)
			this.emit('end')
		})
})

gulp.task('dist', gulp.series([
	'clean',
	'css',
]))

gulp.task('default', gulp.series([
	'dist',
]))
