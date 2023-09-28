const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');

// generate SVG spirte

module.exports = function spriteSVG() {
  return gulp.src('src/images/sprite/svg/*.svg')
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))

    .pipe(cheerio({
      parserOptions: {xmlMode: true}
    }))

    .pipe(replace('&gt;', '>'))
    
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: "sprite.svg"
        }
      }
    }))
    .pipe(gulp.dest('dist/assets/images/sprite'));
};
