var gulp   = require('gulp')
  , hbs    = require('gulp-handlebars')
  , concat = require('gulp-concat')
  , uglify = require('gulp-uglify')
  , jshint = require('gulp-jshint');

gulp.task('lint', function() {

  gulp.src([
    'gulpfile.js'
  , 'app.js'
  , 'routes/*.js'
  , 'client/application.js'
  , 'client/models.js'
  , 'client/views.js'
  , 'client/router.js'
  ])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));

});

gulp.task('build', function() {

  gulp.src('templates/*.hbs')
    .pipe(hbs({ namespace: 'App.templates' }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('client'));

  gulp.src([
    'client/lib/exoskeleton.js'
  , 'client/lib/handlebars.js'
  , 'client/templates.js'
  , 'client/application.js'
  , 'client/models.js'
  , 'client/views.js'
  , 'client/router.js'
  ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/javascripts'));

});

gulp.task('compress', function() {

  gulp.src('public/javascripts/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/javascripts'));

});

gulp.task('watch', function() {
  gulp.watch(['client/*.js', '!client/templates.js'], function() { gulp.run('lint', 'build'); });
});

gulp.task('default', function() {
  gulp.run('lint', 'build');
});
