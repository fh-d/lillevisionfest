var gulp = require("gulp")
var wiredep = require('wiredep').stream;


gulp.task("default", function(){
gulp.watch("bower.json", ["bower"])
})


gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;
  gulp.src('index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('./'));
});