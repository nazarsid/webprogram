var gulp = require('gulp');
var csso = require('gulp-csso'); 
var sass = require('gulp-sass');
var rename = require("gulp-rename");
/*
gulp.task('minCss', function () {
    return gulp.src('app/scss/*.scss')    
       .pipe(csso()) 
       .pipe(rename({ suffix: ".min" })) 
       .pipe(gulp.dest('app/css')); 
});


gulp.task('default', function () { 

    gulp.watch("app/scss/*.scss",gulp.series("minCss"));
});

*/
var gulp = require('gulp'), 
    sass = require("gulp-sass");; 

gulp.task('default', function() { 
    gulp.watch("app/scss/*.sass",gulp.series("sass"));
}); 

gulp.task("sass", function() { 
    return gulp.src("app/scss/*.sass") 
     .pipe(sass()) 
     .pipe(gulp.dest('app/css')); 
}); 

