require(["config"], function(){
	require(["jquery","load","cookie"], function($){
			//清空登录时所存的cookie
			$.cookie('login_user', null,{path:'/'}); 	
			//注册用户信息
			var user_reg = /^[a-z]\w{3,}$/i,
				email_reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,
				emailcheck = false,
				usercheck = false,
				pwdcheck = false,
				conpwdcheck = false;
			//验证用户名的合法性
			$("#username").on("focus",function(){
				$(".username").text("");
				//$(".username").css("color","black");
			}).on("blur",function(){
				var user_first = $("#username").val().substr(0,1),
					user_len = $("#username").val().length;
					
				if(!user_reg.test($("#username").val())){
					$(".username").css("color","red");
					if(!((user_first>="a"&&user_first<="w")||(user_first>="A"&&user_first<="W"))){
						$(".username").text("提示：用户名请用 英文字母开头");
					}else if(user_len<4){
						$(".username").text("提示：用户名至少四个字符")
					}
				}else{
					usercheck = true;
					$(".username").css("color","green");
					$(".username").text("用户名可用");
				}
			});
			//密码强度
			$("#password").on("focus",function(){
				$(".password").text("")
			}).on("keyup",function(){
				var pwd_len = $("#password").val().length;
				if(pwd_len<4&&pwd_len>1){
					$(".password").css("color","red")
					$(".password").text("弱...");
				}else if(pwd_len<7&&pwd_len>3){
					$(".password").css("color","yellow")
					$(".password").text("中等...");
				}else if(pwd_len<10&&pwd_len>6){
					$(".password").css("color","green")
					$(".password").text("强...");
				}
			}).on("blur",function(){
				var pwd_len = $("#password").val().length;
				if($("#password").val().length == 0){
					$(".password").css("color","red")
					$(".password").text("密码不能为空！");
				}else{
					pwdcheck = true;
				}
			});
			//确认密码两次是否驶入一致
			$("#confirmpwd").on("blur",function(){
				var _pwd = $("#password").val(),
					_confirm = $("#confirmpwd").val();
				if(_pwd == ""){
					$(".confirmpwd0").css("color","red");
					$(".confirmpwd0").text("请先输入密码！")
				}else if(_pwd == _confirm){
					$(".confirmpwd0").css("color","green");
					$(".confirmpwd0").text("一致")
					conpwdcheck = true;
				}else{
					$(".confirmpwd0").css("color","red");
					$(".confirmpwd0").text("两次输入密码不一致！")
				}
			});
			//验证邮箱的合法性
			$(".email").on("focus",function(){
				$(".emailshow").text("");
			}).on("blur",function(){
				if(!email_reg.test($(".email").val())){
					$(".emailshow").css("color","red");
					$(".emailshow").text("提示：邮箱格式不合法");
				}else{
					$(".emailshow").css("color","green");
					$(".emailshow").text("邮箱格式正确");
					emailcheck = true;
				}
			});
			//提交用户信息
			$(".regs").on("click",function(){
/*				console.log(usercheck);
					console.log(pwdcheck);
					console.log(conpwdcheck);
					console.log(emailcheck);*/
				if(usercheck&&pwdcheck&&conpwdcheck&&emailcheck){
					
					if($("#ck").is(':checked')){
						$.get("/project3/php/register.php", { username: $("#username").val(), password: $("#password").val(),email: $(".email").val()},
						function(respData){
							   	if (respData.status === 1) {
										// 登录成功，将登录成功用户数据保存到 cookie 中
										alert("注册成功,前往登录...");
										// 跳转到登录页面
										location = "/project3/html/login.html";
									} else {
										//$("#error").innerText = "用户名或密码错误";
										alert("注册失败！！");
									}
						},"json");
						
					}else{
						alert("未勾选服务协议！");
					}
				}else{
					alert("注册失败 信息有误！！");
				}
				
			});
	});
});