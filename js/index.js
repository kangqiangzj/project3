//$(function(){
//	$("#header").load("html/include/header.html",function(){
//		
//	});
//	$("#footer").load("html/include/footer.html");
//});
require(["config"], function(){
	require(["load"], function(){
		console.log("main.......")
	});
	require(["main"], function(){
		console.log("main.......")
	});
});