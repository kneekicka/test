var gulp         = require("gulp"),
    concat       = require("gulp-concat"),
    uglify       = require("gulp-uglify"),
    livereload   = require('gulp-livereload'),
    rename       = require("gulp-rename"),
    sass         = require('gulp-sass'),
    cssnano      = require("gulp-cssnano")

var jsVendors = ['./assets/libs/angular/angular.min.js',
				 './assets/libs/angular-ui-router/release/angular-ui-router.min.js',
				 './assets/libs/angular-animate/angular-animate.min.js',
				 './assets/libs/angular-aria/angular-aria.min.js',
				 './assets/libs/angular-messages/angular-messages.min.js',
				 './assets/libs/angular-material/angular-material.min.js',
         './assets/libs/angular-cookies/angular-cookies.min.js'
				];

var cssVendors = ['./assets/libs/angular-material/angular-material.min.css'];

gulp.task('js-vendors', function() {
  return gulp.src(jsVendors)
    .pipe(concat('vendor.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task("css-vendors", function() {
  return gulp.src(cssVendors)
    .pipe(concat('vendors.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'))
});

gulp.task('js-app', function() {
  return gulp.src('./app/**/*.js')
    .pipe(concat('app.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
});

gulp.task('sass-app', function(){
	return gulp.src('./assets/sass/main.scss')
		   .pipe(sass())
		   .pipe(cssnano())
		   .pipe(rename({suffix: '.min'}))
		   .pipe(gulp.dest('./dist'))
});

gulp.task("watch", function() {
  livereload.listen();
  gulp.watch('./app/**/*.js', ['js-app']);
  gulp.watch('./assets/sass/main.scss', ['sass-app']);
});

gulp.task('default', ['js-app', 'sass-app']);