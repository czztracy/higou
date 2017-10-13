//创建一个gulp对象
var gulp = require("gulp");
//创建一个sass对象引入sass插件
var sass = require("gulp-sass");
//gulp任务
//所有的html
gulp.task("copy-html",function(){
	return gulp.src('../html/*.html').pipe(gulp.dest('higou/html')).pipe(connect.reload());
});
//所有的css
gulp.task("copy-css", function(){
	return gulp.src(["../css/*.css"]).pipe(gulp.dest("higou/css")).pipe(connect.reload());
});
//所有的js
gulp.task("copy-js", function(){
	return gulp.src(["../js/*.js"]).pipe(gulp.dest("higou/js")).pipe(connect.reload());
});
//所有的images
gulp.task("copy-images", function(){
	return gulp.src("../img/**/*").pipe(gulp.dest("higou/img")).pipe(connect.reload());
});
//所有的iconfont
gulp.task("copy-icon-font", function(){
	return gulp.src("../icon-font/**/*").pipe(gulp.dest("higou/icon-font")).pipe(connect.reload());
});
//所有的ajax
gulp.task("ajax",function(){
	return gulp.src("../ajax/*.json").pipe(gulp.dest("higou/ajax")).pipe(connect.reload());
});
//sass文件
gulp.task("sass", function(){
	return gulp.src("../sass/*.scss").pipe(sass()).pipe(gulp.dest("higou/css")).pipe(connect.reload());
});
//一次性执行多个任务
gulp.task("build",["copy-html", "copy-css", "copy-images", "ajax", "copy-js", "copy-icon-font", "sass"], function(){
	console.log("成功");
});

//数据监听
gulp.task("higou", function(){
	//监听所有html
	gulp.watch("../html/*.html", ["copy-html"]);
	//监听所有css
	gulp.watch("../css/*.css", ["copy-css"]);
	//监听所有的js
	gulp.watch("../js/*.js", ["copy-js"]);
	//监听所有的images
	gulp.watch("../img/**/*", ["copy-images"]);
	//监听所有的iconfont
	gulp.watch("../icon-font/**/*", ["copy-icon-font"]);
	//监听所有的ajax
	gulp.watch("../ajax/*.json", ["ajax"]);
	//监听sass文件
	gulp.watch("../sass/*.scss", ["sass"]);
});
//实时刷新
//引入插件
var connect = require("gulp-connect");
//gulp任务
gulp.task("server", function(){
	connect.server({
		root: "higou",//声明服务器的根目录
		livereload:true //开启直播
	})
});	
gulp.task("default", ["server", "higou"]);