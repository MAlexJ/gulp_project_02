"use strict";

var gulp = require('gulp');
var wiredep = require('wiredep').stream;

// Bower
gulp.task('bower', function () {
    gulp.src('./app/index.html')
        .pipe(wiredep({
            directory: "app/bower_components"
        }))
        .pipe(gulp.dest('./app'));
});

// Watch
gulp.task('watch', function () {
    gulp.watch('bower.json', ['bower']);
});