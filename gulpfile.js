/*eslint "strict": 0, "max-len": [2, 100, 4] */
'use strict';

var gulp = require('gulp');
var del = require('del');
var Builder = require('systemjs-builder');

var paths = {
    html: [
        'src/**/*.html'
    ],
    scripts: [
        'src/**/*.js'
    ],
    libs: [
        'node_modules/angular/angular.js',
        'node_modules/traceur/bin/traceur.js',
        'node_modules/systemjs/dist/system*.js*',
        'node_modules/systemjs/node_modules/es6-module-loader/dist/es6-module-loader*.js*'
    ],
    build: 'build'
};

gulp.task('clean', function (callBack) {
    del(paths.build, callBack);
});

gulp.task('copy:html', function () {
    return gulp.src(paths.html)
        .pipe(gulp.dest(paths.build));
});

gulp.task('copy:scripts', function () {
    return gulp.src(paths.sripts)
        .pipe(gulp.dest(paths.build));
});

gulp.task('copy:libs', function () {
    return gulp.src(paths.libs)
        .pipe(gulp.dest(paths.build));
});

gulp.task('copy', ['copy:scripts', 'copy:html', 'copy:libs']);

gulp.task('watch', ['copy'], function () {
    gulp.watch(paths.scripts, ['copy:scripts']);
    gulp.watch(paths.html, ['copy:html']);
    gulp.watch(paths.libs, ['copy:libs']);
});

gulp.task('build', ['copy:html'], function () {
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
        .buildSFX('app', 'build/bootstrap.js', {
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
