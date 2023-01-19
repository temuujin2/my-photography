var gulp = require('gulp')
var responsive = require('gulp-responsive')
 
gulp.task('default', function () {
  return gulp
    .src('assets/img/portfolio/*.{png,jpg}')
    .pipe(
      responsive({
        // produce multiple images from one source
        
        '*.jpg': [
          {
            width: 500,
          },
          {
            width: 1500,
            rename: {suffix: '@2x'}
          }
         
        ],
        'rebekahHeader.jpg':[
          {
            width:1600


          }

        ],
      })
    )
    .pipe(gulp.dest('build/smallimages'))
})