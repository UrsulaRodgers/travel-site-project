var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();


gulp.task('watch', function(){

	browserSync.init({
		notify: false,
		server: {
			baseDir:"app"
		}
	});

	watch('./app/index.html', function(){
		browserSync.reload();
	});
	//watch for changes in any css files and files within subfolders
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssInject');
	});

	watch('./app/assets/scripts/**/*.js', function(){
		gulp.start('scriptsRefresh');
	});
});


//['styles'] is a dependency task, ie is the task defined that must be run before cssInject
gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function(){
	browserSync.reload();
});