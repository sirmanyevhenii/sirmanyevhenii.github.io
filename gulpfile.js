'use strict';
 
var gulp = require('gulp'),
		sass = require('gulp-sass'),
		livereload = require('gulp-livereload'),
		connect = require('gulp-connect');


// server connect
gulp.task('connect', function() {
  connect.server({
    root: 'cv',
    livereload: true
  });
});


//html
gulp.task('html', function () {
  gulp.src('./cv/index.html')
    .pipe(connect.reload());
});


// sass
gulp.task('sass', function () {
  return gulp.src('./cv/style/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./cv/style'))
    .pipe(connect.reload());
});

// js 
gulp.task('js', function () {
  gulp.src('./cv/js/script.js')
    .pipe(connect.reload());
});


// watch
gulp.task('watch', function () {
  gulp.watch('./cv/index.html', ['html']);
  gulp.watch('./cv/style/*.scss', ['sass']);
  gulp.watch('./cv/js/script.js', ['js']);
});


// default
gulp.task('default', ['connect', 'html', 'sass', 'js', 'watch']);