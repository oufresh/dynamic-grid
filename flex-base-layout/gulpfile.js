var gulp = require('gulp');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var postcss      = require('gulp-postcss');

gulp.task('autoprefixer', function() {
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));

    return gulp.src('./src/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
  });