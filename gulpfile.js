var gulp   = require('gulp')
  , hbs    = require('gulp-handlebars')
  , myth   = require('gulp-myth')
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

  gulp.src('client/templates/*.hbs')
    .pipe(hbs({ namespace: 'App.templates' }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('client'));

  gulp.src([
    'client/javascripts/lib/exoskeleton.js'
  , 'client/javascripts/lib/handlebars.js'
  , 'client/javascripts/templates.js'
  , 'client/javascripts/application.js'
  , 'client/javascripts/models.js'
  , 'client/javascripts/views.js'
  , 'client/javascripts/router.js'
  ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/javascripts'));

  gulp.src('client/stylesheets/*.css')
    .pipe(myth())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('public/stylesheets'));

});

gulp.task('compress', function() {

  gulp.src('public/javascripts/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/javascripts'));

});

gulp.task('watch', function() {
  gulp.watch([
    'client/*.js'
  , 'client/templates/*.hbs'
  , '!client/templates.js'
  ], function() { gulp.run('lint', 'build'); });
});

gulp.task('default', function() {
  gulp.run('lint', 'build');
});
