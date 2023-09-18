const gulp = require('gulp')

module.exports = pdf = () => {
  return gulp.src('src/**/*.pdf')
    .pipe(gulp.dest('dist/assets/'))
}