var gulp = require('gulp');
var csso = require('gulp-csso'); 
var rename = require("gulp-rename");

gulp.task('minCss', function () {
    return gulp.src('app/scss/*.scss')    
       .pipe(csso()) 
       .pipe(rename({ suffix: ".min" })) 
       .pipe(gulp.dest('app/css')); 
});

gulp.task('default', function () {

    gulp.watch("app/scss/*.scss",gulp.series("minCss"));
});

