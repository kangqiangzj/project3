define(["jquery", "cookie"], function($){
	$.ajax("/project3/html/include/header.html").done(function(data){
		// 将加载的头部静态资源添加到 .header 盒子中
		// $(data).appendTo(".header");
		$("#header").html(data);
		$.cookie.json = true;
		var _user = $.cookie("login_user");
		var user= eval ("(" + _user + ")");
		//console.log(user);
		if (user)
			$(".login").html(`<h5>欢迎你：${user.username}</h5>`);
	}).done(function(){
		
	});
	//加载footer
	$("#footer").load("/project3/html/include/footer.html");
});