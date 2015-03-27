var gulp = require('gulp');
var del = require('del');

var paths = {
    app: [
        'node_modules/traceur/bin/traceur.js',
        'node_modules/es6-module-loader/dist/es6-module-loader.js*',
        'node_modules/es6-module-loader/dist/es6-module-loader.src.js*',
        'node_modules/systemjs/dist/system.js*',
        'frontend/**/*'
    ],
    build: 'build'

};

gulp.task('clean', function(callBack) {
    del(paths.build, callBack);
});

gulp.task('app', ['clean'], function() {
    return gulp.src(paths.app)
        .pipe(gulp.dest(paths.build));
});

gulp.task('watch', ['app'], function() {
    gulp.watch(paths.app, ['app'])
});