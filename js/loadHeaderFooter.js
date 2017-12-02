define(["jquery", "cookie"], function($){
	/*$("#header").load("/project3/html/include/header.html", function(){
		$.cookie.json = true;
		var user = $.cookie("login_user");	
		console.log(user);
		if (user)
			$(".login").html(`<h5>欢迎你：${user.username}</h5>`);
	});*/
	$.ajax("/project3/html/include/header.html").done(function(data){
		// 将加载的头部静态资源添加到 .header 盒子中
		// $(data).appendTo(".header");
		$("#header").html(data);
	}).done(function(){
		$.cookie.json = true;
		var user = $.cookie("login_user");	
		console.log(user);
		if (user)
			$(".login").html(`<h5>欢迎你：${user.username}</h5>`);
	});
	//加载footer
	$("#footer").load("/project3/html/include/footer.html");
});