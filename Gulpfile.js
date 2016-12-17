var config = require('./gulpconfig.json');
var gulp = require('gulp');
var shell = require('gulp-shell');
var htmlmin = require('gulp-htmlmin');
// var cloudflare = require('gulp-cloudflare');
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');
var uncss = require('gulp-uncss');
var cleanCss = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var jpegtran = require('imagemin-jpegtran');
var gifsicle = require('imagemin-gifsicle');
var optipng = require('imagemin-optipng');
var replace = require('gulp-replace');
var fs = require('fs');
var download = require('gulp-download-stream');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var webFontsBase64 = require('gulp-google-fonts-base64-css');
var del = require('del');

gulp.task('jekyll', function() {
  return gulp.src('index.html', { read: false })
    .pipe(shell([
      'bundle exec jekyll build'
    ]));
});

gulp.task('optimize-images', function() {
  return gulp.src(['_site/**/*.jpg', '_site/**/*.jpeg', '_site/**/*.gif', '_site/**/*.png'])
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      verbose: true,
      use: [pngquant(), jpegtran(), gifsicle(), optipng()]
    }))
    .pipe(gulp.dest('_site/'));
});

gulp.task('optimize-css', function() {
  return gulp.src('_site/assets/main.css')
    .pipe(autoprefixer())
    .pipe(uncss({
      html: ['_site/**/*.html'],
      stylesheets: ['_site/assets/main.css'],
      ignore: []
    }))
    .pipe(cleanCss({ debug: true }, function(details) {
      gutil.log('  ', details.name, ' original size: ', gutil.colors.magenta(details.stats.originalSize));
      gutil.log('  ', details.name, ' minified size: ', gutil.colors.magenta(details.stats.minifiedSize));
    }))
    .pipe(gulp.dest('_site/assets/'));
});

gulp.task('optimize-html', function() {
  return gulp.src('_site/**/*.html')
    .pipe(htmlmin({
      // collapseInlineTagWhitespace: true,
      // conservativeCollapse: true,
      collapseWhitespace: true,
      preserveLineBreaks: true
    }))
    .pipe(replace(/<link rel=\"stylesheet\" href=\"https:\/\/lumirpg.tk\/assets\/main.css\">/g, function(s) {
      var style = fs.readFileSync('_site/assets/s.css', 'utf8');
      return '<style>\n' + style + '\n</style>';
    }))
    .pipe(gulp.dest('_site/'));
});

gulp.task('fetch-newest-analytics', function() {
  return download({ file: 'analytics.js', url: 'https://www.google-analytics.com/analytics.js' })
    .pipe(gulp.dest('./_site/assets/meta/'));
});

// gulp.task('fetch-google-webfonts-meta', function() {
//   return download({ file: 'fonts.css', url: 'https://fonts.googleapis.com/css?family=Quattrocento|Quattrocento+Sans|Roboto+Mono' })
//     .pipe(gulp.dest('./_site/assets/'));
// });

// gulp.task('fetch-google-webfonts', function() {
//   var meta = fs.readFileSync('./_site/assets/fonts.css', 'utf8');
//   meta = meta.match(/url(?:\(['"]?)(.*?)(?:['"]?\))/gi);
//   for (var i = 0; i < meta.length; i++) {
//     meta[i] = meta[i].replace(/(url\(|\)|")/g, '');
//   };
//   return download(meta)
//     .pipe(gulp.dest('./_site/assets/meta'));
// });

// gulp.task('replace-google-webfonts-for-local', function() {

// });

gulp.task('concat-google-webfonts-into-css', function() {
  return gulp.src(['./_site/assets/fonts.css', './_site/assets/main.css'])
    .pipe(concat('s.css', {newLine: ';'}))
    .pipe(gulp.dest('./_site/assets'));
});

gulp.task('fetch-fonts-to-base64', function() {
  return gulp.src('./fonts.list')
    .pipe(webFontsBase64())
    .pipe(concat('fonts.css'))
    .pipe(gulp.dest('./_site/assets/'));
});

gulp.task('remove-unneeded-files', function() {
  return del([
    './_site/assets/main.css',
    './_site/assets/fonts.css',
    './_site/assets/s.css'
  ]);
});

// gulp.task('rsync-files', function() {
//   return gulp.src('index.html', { read: false })
//     .pipe(shell([
//       'cd _site && rsync -az --delete . ' + config.remoteServer + ':' + config.remotePath
//     ]));
// });

// gulp.task('purge-cache', function() {
//   var options = {
//     token: config.cloudflareToken,
//     email: config.cloudflareEmail,
//     domain: config.cloudflareDomain
//   };

//   cloudflare(options);
// });

gulp.task('raw-deploy', function(callback) {
  runSequence(
    'jekyll',
    // 'rsync-files',
    // 'purge-cache',
    callback
  );
});

gulp.task('dry-run', function(callback) {
  runSequence(
    'fetch-newest-analytics',
    'jekyll',
    'optimize-images',
    'optimize-css',
    'optimize-html',
    callback
  );
});

gulp.task('deploy', function(callback) {
  runSequence(
    'jekyll',
    'fetch-newest-analytics',
    'fetch-fonts-to-base64',
    'optimize-images',
    'optimize-css',
    'concat-google-webfonts-into-css',
    'optimize-html',
    'remove-unneeded-files',
    // 'rsync-files',
    // 'purge-cache',
    callback
  );
});
