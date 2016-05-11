
// Gulp requires
var gulp = require('gulp');
var gulpServe = require('gulp-serve');

// Builder
var systemjsBuilder = require('systemjs-builder');

gulp.task('build', function (callback) {
    var builder = new systemjsBuilder("src", "src/systemjs.config.js");
    builder.config({
        map : {
            "rxjs": "node_modules/rxjs",
            "@angular": "node_modules/@angular"
        },
        packages: {
            "src": { defaultExtension: "js" },
            "app": { defaultExtension: "js" },
            "rxjs": { defaultExtension: "js" },
            "@angular/common": { main: "index.js", defaultExtension: "js" },
            "@angular/compiler": { main: "index.js", defaultExtension: "js" },
            "@angular/core": { main: "index.js", defaultExtension: "js" },
            "@angular/http": { main: "index.js", defaultExtension: "js" },
            "@angular/platform-browser": { main: "index.js", defaultExtension: "js" },
            "@angular/platform-browser-dynamic": { main: "index.js", defaultExtension: "js" },
            "@angular/testing": { main: "index.js", defaultExtension: "js" },
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