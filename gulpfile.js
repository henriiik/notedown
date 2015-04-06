/*eslint "strict": 0, "max-len": [2, 100, 4] */
'use strict';

var del = require('del');
var gulp = require('gulp');
var jade = require('gulp-jade');
var jspm = require('jspm');
var path = require('path');

if (!process.env.NPM_CONFIG_PRODUCTION) {
    var eslint = require('gulp-eslint');
    var karma = require('karma').server;
}

var paths = {
    jade: [
        'src/**/*.jade'
    ],
    js: [
        'karma.conf.js',
        'protractor.conf.js',
        'gulpfile.js',
        'server.js',
        'src/app/**/*.js'
    ],
    build: 'frontend/build'
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

gulp.task('pre-commit', ['test', 'lint']);

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
    return jspm.bundleSFX('app/notedown.module', paths.build + '/notedown.js', {
        minify: true,
        mangle: true,
        sourceMaps: false
    });
});

gulp.task('build', ['build:js', 'build:jade']);
