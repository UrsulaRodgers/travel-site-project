var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	//fs needed for postcss-import to work
	fs = require('fs'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import'),
	mixins = require('postcss-mixins');


gulp.task('styles', function(){
	//gulp.src is an asynchronous function, need to return
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
		.on('error', function(errorInfo) {
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));
});