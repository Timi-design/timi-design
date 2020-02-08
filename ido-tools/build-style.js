'use strict';

const {series, src, dest} = require('gulp');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

// 编译less
function compile() {
  return src('../src/styles/index.less')
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie > 8'],
      cascade: false
    }))
    .pipe(rename({
      basename: 'idoDesign'
    }))
    .pipe(dest('../dist/styles'));
}

// 拷贝字体文件
function copyfont() {
  return src('../src/styles/common/iconfont/fonts/*.*')
    .pipe(dest('../dist/styles/fonts'));
}

exports.build = series(compile, copyfont);
