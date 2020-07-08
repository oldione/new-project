var gulp = require('gulp');

gulp.task('default', defaultTask);

function defaultTask(done) {
    done();
  }
  
  exports.default = defaultTask

gulp.task('minify-css', function(done){
    return gulp.src('./src/css/*.css')
    .pipe(gulp.dest('dist/css/'))
    done();
})