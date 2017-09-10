// SETTINGS
// ============================================
const gulp = require('gulp');
const sequence = require('run-sequence');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const mocha = require('gulp-mocha');
const istanbul = require('gulp-istanbul');
const isparta = require('isparta')

const watch_target = [
  'src/*.js',
  'test/*.js'
];

// TASK
// ============================================
gulp.task('default', function () {
  return sequence(
    'eslint',
    'babel',
    'browserify',
    'test',
    'watch'
  );
});

gulp.task('babel', function () {
  return gulp.src('src/index.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'))
});

gulp.task('browserify', function () {
  browserify({
    entries: 'src/entry.js'
  })
    .transform(babelify)
    .bundle()
    .pipe(source('tel-splitter.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch(watch_target, function () {
    sequence(
      'eslint',
      'babel',
      'browserify',
      'test'
    );
  });
});

gulp.task('eslint', function () {
  return gulp.src('src/index.js')
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('pre-test', function () {
  return gulp.src('src/*.js')
    .pipe(istanbul({ instrumenter: isparta.Instrumenter }))
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function () {
  return gulp.src('test/*.js')
    .pipe(mocha())
    .pipe(istanbul.writeReports())
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});