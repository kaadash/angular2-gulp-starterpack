'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var ts = require('gulp-typescript');
var gls = require('gulp-live-server');


gulp.task('styles', function () {
  gulp.src('dev/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('.tmp/css'));
});

 
gulp.task('templates', function() {
  gulp.src('dev/layouts/*.jade')
    .pipe(jade({}))
    .pipe(gulp.dest('.tmp'))
});

gulp.task('scripts', function () {
    return gulp.src('dev/scripts/ts/**/*')
        .pipe(ts({
            noImplicitAny: true,
            out: 'main.js'
        }))
        .pipe(gulp.dest('.tmp/scripts'));
});

gulp.task('serve', ['styles', 'scripts', 'templates'], function() {
  var server = gls.static('.tmp', 8888);
  server.start();

  gulp.watch('dev/styles/**/*.scss', ['styles']);
  gulp.watch('dev/scripts/ts/**/*.ts', ['scripts']);
  gulp.watch('dev/layouts/*.jade', ['templates']);

  gulp.watch(['.tmp/*'], function (file) {
    server.notify.apply(server, [file]);
  });

});



gulp.task('default', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});