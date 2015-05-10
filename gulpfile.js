/*eslint "strict": 0, "max-len": [2, 100, 4] */
'use strict';

var gulp = require('gulp');
var jspm = require('jspm');
var path = require('path');

if (!process.env.NPM_CONFIG_PRODUCTION) {
    var eslint = require('gulp-eslint');
    var karma = require('karma').server;
}

var paths = {
    js: [
        'karma.conf.js',
        'protractor.conf.js',
        'gulpfile.js',
        'server.js',
        'src/app/**/*.js'
    ],
    build: 'src'
};

gulp.task('lint', function () {
    return gulp.src(paths.js)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('test', function (done) {
    karma.start({
        configFile: path.join(__dirname, 'karma.conf.js')
    }, done);
});

gulp.task('tdd', function (done) {
    karma.start({
        configFile: path.join(__dirname, 'karma.conf.js'),
        singleRun: false,
        autoWatch: true
    }, done);
});

gulp.task('build', function () {
    return jspm.bundleSFX('app/notedown.module', paths.build + '/notedown.js', {
        minify: true,
        mangle: true,
        sourceMaps: true
    });
});

gulp.task('pre-commit', ['test', 'lint']);
gulp.task('default', ['pre-commit']);
