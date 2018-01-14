var gulp=require('gulp');
//gulp.task('say',function(){
	//console.log(1);
	//gulp.src取一个文件
//	gulp.src('src/index.html').pipe(gulp.dest('dist/'))
//}) 
//gulp.task('copy',function(){
	
//	gulp.src('src/index.html').pipe(gulp.dest('dist/'))
//})
//gulp.task('listen',function(){
	
//	gulp.watch('src/index.html',['copy']);
//})
var browserSync=require('browser-sync').create();
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("src/index.html",["html"]);
});

gulp.task("html",function(){

	gulp.src("src/index.html").pipe(browserSync.reload({
			stream:true
		})
	);
})

