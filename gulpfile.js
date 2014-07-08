var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    sass = require('gulp-sass'),
    bourbon = require('node-bourbon'),
    neat = require('node-neat').includePaths;

// Javascript
gulp.task('browserify', function() {
    gulp.src(['./assets/js/app.js'])
        .pipe(browserify({
            insertGlobals : true,
            debug : true // Compile with sourcemaps
        }))
        .pipe(gulp.dest('./js'))
});

// Styles Task
gulp.task('styles', function() {
    return gulp.src('./assets/scss/styles.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: ['styles'].concat(neat)
        }))
        .pipe(gulp.dest('./css'));
});

// Default Task
gulp.task('default', ['browserify', 'styles']);

// Watcher Task
gulp.task('watch', function() {
    gulp.watch(['./assets/js/**/*.js'], ['browserify']);
    gulp.watch(['./assets/scss/**/*.scss'], ['styles']);
});
