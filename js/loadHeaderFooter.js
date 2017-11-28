define(["jquery", "cookie"], function($){
	$("#header").load("html/include/header.html", function(){
		//var user = $.cookie("login_user");
//		if (user)
//			$(".login_reg").html(`<h2>欢迎你：${user}</h2>`);
	});
	$("#footer").load("html/include/footer.html");
});