const gulp = require('gulp');  
const sass = require('gulp-sass');  
const browserSync = require('browser-sync'); 
const errorHandler = require('gulp-error-handle');

gulp.task('sass', function () {  
    gulp.src('sass/main.scss')
    	.pipe(errorHandler())
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function() {  
    browserSync.init(["css/*.css", "js/*.js", "*.html"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch("sass/*/*.scss", ['sass']);
});