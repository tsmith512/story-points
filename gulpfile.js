/* eslint strict: ["error", "global"] */
/* global require */
'use strict';

/*
     _
  __| | ___ _ __  ___
 / _` |/ _ \ '_ \/ __|
| (_| |  __/ |_) \__ \
 \__,_|\___| .__/|___/
           |_|
*/

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

gulp.task('sass', () => {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({
      advanced: false,
      mediaMerging: false,
      rebase: false,
      restructuring: false,
      shorthandCompacting: false
    }))
    .pipe(gulp.dest('./css'));
});


gulp.task('watch', () => {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
