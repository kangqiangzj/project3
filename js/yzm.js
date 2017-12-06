define(["jquery"], function($){
	function yanZm() {
		$.ajax({
			type: "get",
			url: "http://route.showapi.com/932-2",
			data: {
				showapi_appid: "49974",
				showapi_sign: "2a380c8e64ff4d13bf1273e755f7c7dd"
			},
			dataType: "json",
			success: function(data) {
				var img = data.showapi_res_body;
				$("#yzm img").attr("src", img.image);
				$("#yzm img").attr("sid", img.sid);
				//$("#yzm img").data("sid", img.sid);*************************缓存数据
			}
		});
	}
	var yanzheng = false,
		usercheck = false;
	yanZm();
	$("#yzm").on("click", function(){
		yanZm();
		$("#tishi").text("");
	});
	$("#checkma").on("focus",function(){
		$("#tishi").text("");
	}).on("blur", function() {
		$.ajax({
			type: "get",
			url: "http://route.showapi.com/932-1",
			data: {
				showapi_appid: "49974",
				showapi_sign: "2a380c8e64ff4d13bf1273e755f7c7dd",
				checkcode: $("#checkma").val(),
				sid: $("#yzm img").attr("sid")
			},
			dataType: "json",
			success: function(data) {
				if(data.showapi_res_body.valid) {
					$("#tishi").css("color","true");
					$("#tishi").text("正确!");
					yanzheng = true;
				} else {
					$("#tishi").css("color","red");
					$("#tishi").text("验证码错误！");
				}
	
			}
	
		});
	});
	$("#login").on("click",function(){
		$.get("/project3/php/login.php", { username: $("#username").val(), password: $("#password").val()},
		  function(respData){
		   	if (respData.status === 1) {
		   		if(yanzheng){
		   			// 登录成功，将登录成功用户数据保存到 cookie 中
					alert("登录成功");
					var user = respData.data;
					$.cookie("login_user", JSON.stringify(user), {path:"/"});
					// 跳转到个人信息页面
					location = "/project3/index.html";
				} else {
					//$("#error").innerText = "用户名或密码错误";
					alert("验证码错误");
				}
		   	} else {
					//$("#error").innerText = "用户名或密码错误";
					alert("用户名或密码错误");
				}
		 },"json");
	});
	$(".register").on("click",function(){
		location.assign("/project3/html/register.html");
	});
});