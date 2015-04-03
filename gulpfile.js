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
        'src/**/*.js'
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
    return new Builder({
            baseURL: 'src/',
            paths: {
                'angular': '../node_modules/angular/angular.js',
                'traceur': '../node_modules/traceur/bin/traceur'
            },
            meta: {
                'angular': {
                    format: 'global',
                    exports: 'angular'
                }
            }
        })
        .buildSFX('app', 'build/app.js', {
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

gulp.task('build', ['build:js', 'build:jade'], function () {});
