const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

// Работаем со стилями

module.exports = function styles() {
  return gulp.src('src/scss/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 15 versions', '> 1%', 'ie 11'],
      cascade: true
    }))
    .pipe(gulp.dest('dist/assets/css'))
};
