require(["config"], function(){
	require(["jquery","load","yzm"], function($){
		
		$("#login").on("click",function(){
				$.get("/project3/php/login.php", { username: $("#username").val(), password: $("#password").val()},
				  function(respData){
				   	if (respData.status === 1) {
							// 登录成功，将登录成功用户数据保存到 cookie 中
							alert("成功");
							var user = respData.data;
							$.cookie("login_user", JSON.stringify(user), {path:"/"});
							// 跳转到个人信息页面
							location = "/project3/index.html";
						} else {
							//$("#error").innerText = "用户名或密码错误";
							alert("用户名或密码错误");
						}
				 },"json");
			});
		
		
	});
});