var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');

var path = {
  HTML: 'public/index.html',
  JS: 'public/js/**/*.js',
  VENDOR_CSS: 'public/vendor_css/**/*.css',
  CSS: 'public/css/app.scss',
  FONTS: 'public/fonts/**/*',
  MINIFIED_OUT: 'build.min.js',
  OUT: 'build.js',
  DEST: 'dist',
  DEST_JS: 'dist/js',
  DEST_CSS: 'dist/css',
  DEST_FONTS: 'dist/fonts',
  DEST_BUILD: 'dist/build',
  ENTRY_POINT: './public/js/app.js'
};


gulp.task('copy', function() {
    gulp.src(path.HTML).pipe(gulp.dest(path.DEST));
    gulp.src(path.VENDOR_CSS).pipe(gulp.dest(path.DEST_CSS));
    gulp.src(path.FONTS).pipe(gulp.dest(path.DEST_FONTS));
});

gulp.task('bundle', function() {
    gulp.watch([path.HTML], ['copy']);
    gulp.watch('public/css/**/*.scss', ['sass']);

    var watcher  = watchify(browserify({
        entries: [path.ENTRY_POINT],
        transform: [reactify],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true
    }));

    return watcher.on('update', function() {
        watcher.bundle()
        .pipe(source(path.OUT))
        .pipe(gulp.dest(path.DEST_JS))
        console.log('Updated');
    })
    .bundle()
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST_JS));

});

gulp.task('sass', function() {
    return gulp.src(path.CSS)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.DEST_CSS));
});

gulp.task('webserver', function() {
    console.log('in serve');
    gulp.src('dist')
        .pipe(webserver({
            host: 'localhost',
            port: 8000,
            path: '/',
            livereload: true,
            directoryListing: false,
            open: true
        }));
    console.log('serve ended');
});

gulp.task('build', ['copy', 'sass', 'bundle']);
gulp.task('serve', ['webserver']);
