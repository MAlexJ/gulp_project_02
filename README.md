Install:

**Step #1**

1. Create html, js, css files.

**Step #2**

1. Create a file called package.json.
<pre>
{
  "name": "gulp_project_01",
  "version": "0.1.0",
  "devDependencies": {
   
  }
}
</pre>

2. Create a file called gulpfile.js in your project with these contents:

<pre>
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});
</pre>

3. Create a file called bower.json:

<pre>
{
  "name": "gulp_project_02",
  "version": "0.1.0",
  "dependencies": {
    
  }
}
</pre>

4. Create a file called .bowerrc in your project with these contents:

<pre>
{
  "directory": "app/bower_components"
}
</pre>
Where "directory" is the path to resource files in project/

**Step #3**

Install the module with npm: 
<pre>
npm install --save-dev gulp

npm install --save-dev wiredep
</pre>

**Step #4**
Install packages with bower install. 
Bower installs packages to bower_components/.

<pre>
bower install --save jquery

bower install --save normalize.css
</pre>

**Step #5**

1.Config gulp tasks:
<pre>
"use strict";

var gulp = require('gulp');
var wiredep = require('wiredep').stream;

// Bower
gulp.task('bower', function () {
    gulp.src('./app/index.html')
        .pipe(wiredep({
            directory: "app/bower_components"
        }))
        .pipe(gulp.dest('./app'));
});

// Watch
gulp.task('watch', function () {
    gulp.watch('bower.json', ['bower']);
});
</pre>

**Step #5**

1. Install:

<pre>
npm install --save-dev gulp-useref

npm install --save-dev gulp-if

npm install --save-dev gulp-uglify

npm install --save-dev gulp-clean-css

</pre>

2. Create a new task:

<pre>
// Html
gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist'));
});

</pre>

3. Set Blocks are expressed:

<pre>
<!-- build:<type>(alternate search path) <path> <parameters> -->
... HTML Markup, list of script / link tags.
<!-- endbuild -->
</pre>

**Step #6**

1. install :
<pre>
npm install --save-dev gulp-clean
</pre>

2. Add in gulpfile.js
<pre>
var clean = require('gulp-clean');
 
 // Clean 
gulp.task('default', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});
</pre>

