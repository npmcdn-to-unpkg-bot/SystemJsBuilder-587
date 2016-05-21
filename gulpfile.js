
// Gulp requires
var gulp = require('gulp');
var gulpServe = require('gulp-serve');

// Builder
var systemjsBuilder = require('systemjs-builder');

gulp.task('build', function (callback) {
    var builder = new systemjsBuilder("src", "src/systemjs.config.js");
    builder.config({
        paths: {
            './node_modules/*': '../node_modules/*'
        }
    });
    builder.bundle("app/main.js", "dist/out.js")
        .then(function () {
            console.log('Build complete');
            callback();
        })
        .catch(function (ex) {
            console.log('error', ex);
            callback('Build failed.');
        });
});

// Start tasks
gulp.task('serve',
    gulpServe({
        root: ['.'],
        port: 8000})
);