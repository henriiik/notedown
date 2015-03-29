/*eslint "strict": [2, "global"], "maxlen": [2, 100, 4] */
'use strict';

var gulp = require('gulp');
var del = require('del');

var paths = {
    app: [
        'src/**/*'
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

gulp.task('app', function () {
    return gulp.src(paths.app)
        .pipe(gulp.dest(paths.build));
});

gulp.task('libs', function () {
    return gulp.src(paths.libs)
        .pipe(gulp.dest(paths.build));
});

gulp.task('build', ['app', 'libs']);

gulp.task('watch', ['build'], function () {
    gulp.watch(paths.app, ['app']);
    gulp.watch(paths.libs, ['libs']);
});
