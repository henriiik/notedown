/*eslint "strict": 0, "max-len": [2, 100, 4] */
'use strict';

var Builder = require('systemjs-builder');
var del = require('del');
var eslint = require('gulp-eslint');
var gulp = require('gulp');
var jade = require('gulp-jade');

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
    var builder = new Builder();
    return builder.loadConfig('./src/config.js')
        .then(function () {
            builder.config({
                baseURL: 'file:' + process.cwd() + '/src'
            });

            return builder.buildSFX('notedown.module', 'build/notedown.js', {
                    minify: true
                })
                .then(function () {
                    console.log('Build complete');
                })
                .catch(function (err) {
                    console.log('Build error');
                    console.log(err);
                });
        });
});

gulp.task('build', ['build:js', 'build:jade']);
