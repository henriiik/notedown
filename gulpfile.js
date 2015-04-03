/*eslint "strict": 0, "max-len": [2, 100, 4] */
'use strict';

var del = require('del');
var eslint = require('gulp-eslint');
var gulp = require('gulp');
var jade = require('gulp-jade');
var jspm = require('jspm');

var paths = {
    jade: [
        'src/**/*.jade'
    ],
    js: [
        'src/**/*.js',
        '!src/jspm_packages/**/*',
        '!src/config.js'
    ],
    build: 'build'
};

gulp.task('lint', function () {
    return gulp.src(paths.js)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('clean', function (callBack) {
    del(paths.build, callBack);
});

gulp.task('build:jade', function () {
    return gulp.src(paths.jade)
        .pipe(jade({
            locals: {
                production: true
            }
        }))
        .pipe(gulp.dest(paths.build));
});

gulp.task('build:js', function () {
    return jspm.bundleSFX('notedown.module', 'build/notedown.js', {
        minify: true,
        mangle: true,
        sourceMaps: false
    });
});

gulp.task('build', ['build:js', 'build:jade']);
