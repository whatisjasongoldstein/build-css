const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// HTML
const gulpNunjucks = require('gulp-nunjucks');
const nunjucks = require('nunjucks');

const reload = browserSync.reload;

const dist = 'dist/buildcss';
const marked = require('marked');

// const templateEnv = new nunjucks.Environment();
const templateEnv = new nunjucks.Environment(
  new nunjucks.FileSystemLoader('src')
);

templateEnv.addFilter('markdown', function(str) {
  return new nunjucks.runtime.SafeString(marked(str));
});


//
// Copy html test pages.
//
gulp.task('html', () => {
  gulp.src('src/**/*.html')
    .pipe(gulpNunjucks.compile(null, {
      env: templateEnv,
    }))
    .pipe(gulp.dest(dist));
});

//
// Copy html test pages.
//
gulp.task('files', () => {
  gulp.src('src/**/*.{js,css}')
    .pipe(gulp.dest(dist));
});


//
// Dev server
//
gulp.task('serve', ['files', 'html'], () => {
  browserSync.init({
    notify: true,
    port: 9000,
    open: false,
    reloadOnRestart: true,
    startPath: '/buildcss/',
    server: {
      baseDir: ['dist']
    }
  });

  gulp.watch('src/**/*.*', ['files', reload]);
  gulp.watch('src/**/*.html', ['html', reload]);
  gulp.watch('src/**/*.scss', ['css', reload]);
});

gulp.task('default', ['serve']);
