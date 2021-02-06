var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var usemin = require('gulp-usemin');
var minifyHtml = require('gulp-minify-html');
var rev = require('gulp-rev');

gulp.task('clean', function (cb) {
    return del([
        // everything inside the dist folder
        'app/dist/**/*'
    ], cb);
});

gulp.task('usemin', function () {
    return gulp.src('app/**/*.html')
        .pipe(usemin({
            html: [minifyHtml({empty: true, conditionals:true})],
            js: [uglify(), 'concat', rev()]
        }))
        .pipe(gulp.dest('app/dist'));
});

gulp.task('build', gulp.series('clean', function () {
    gulp.run('usemin');
}));




