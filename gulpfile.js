var gulp   = require('gulp');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');

var cssFiles = ['assets/css/*.css', '!assets/css/*.min.css'],
    cssDest  = 'assets/css';

var jsFiles = ['assets/js/*.js', '!assets/js/*.min.js'],
    jsDest  = 'assets/js';

gulp.task('css', function() {
  return gulp.src(cssFiles)
          .pipe(cssmin())
          .pipe(rename({suffix: '.min'}))
          .pipe(gulp.dest(cssDest));
});

gulp.task('js', function() {
  return gulp.src(jsFiles)
         .pipe(uglify())
         .pipe(rename({suffix: '.min'}))
         .pipe(gulp.dest(jsDest));
});

gulp.task('default', ['css', 'js']);

gulp.watch(cssFiles, ['css']);
gulp.watch(jsFiles, ['js']);