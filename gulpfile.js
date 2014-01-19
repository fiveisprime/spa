var gulp   = require('gulp')
  , hbs    = require('gulp-handlebars')
  , myth   = require('gulp-myth')
  , concat = require('gulp-concat')
  , jshint = require('gulp-jshint');

gulp.task('lint', function() {

  gulp.src([
    'gulpfile.js'
  , 'app.js'
  , 'routes/*.js'
  , 'public/javascripts/lib/*.js'
  , 'public/javascripts/app.js'
  ])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));

});

gulp.task('build', function() {

  gulp.src('templates/*.hbs')
    .pipe(hbs({ namespace: 'Handlebars.templates' }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('public/javascripts'));

  gulp.src(['styles/normalize.css', 'styles/grid.css', 'styles/main.css'])
    .pipe(myth())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('public/stylesheets'));

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
