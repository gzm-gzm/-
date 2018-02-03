
/**
 * Created by Administrator on 2018/1/11.
 */
/*//获取gulp对象
var gulp=require("gulp");


gulp.task("one",function(){
	console.log("one")
	gulp.src("code/02_dafeiji.html")//指定要处理的文件
		.pipe(gulp.dest("dest/html"))//处理完成后文件要存放的位置
})

//任务的依赖
gulp.task("two",function(){
	console.log("two")
})
//three任务依赖one two任务  先执行one 和two
gulp.task("three",function(){
	console.log("three")
})
*/





/*var obj = {
	removeComments: true, //清除HTML注释
	collapseWhitespace: true, //压缩HTML
	collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==> <input checked/>
	removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
	removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
	removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
	minifyJS: true, //压缩页面JS
	minifyCSS: true //压缩页面CSS
}*/





/*获取gulp对象*/
var gulp=require("gulp");
//导入插件
var uglify=require("gulp-uglify")//压缩js插件

//压缩js的插件
gulp.task("jsTask",function(){
	gulp.src("code/js/myPlane.js")//要处理的文件
	.pipe(uglify())//使用插件uglify
	.pipe(gulp.dest("dest/js"));//处理完成后文件要存放的位置
	
})
/*默认任务*/
gulp.task("default",["jsTask"]);
