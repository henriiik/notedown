var gulp = require('gulp');
var del = require('del');

var paths = {
    src: [
        'src/**/*'
    ],
    build: 'build'
};

gulp.task('clean', function (callBack) {
    del(paths.build, callBack);
});

gulp.task('build', ['clean'], function () {
    return gulp.src(paths.src)
        .pipe(gulp.dest(paths.build));
});
