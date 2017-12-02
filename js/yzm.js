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
			}
		});
	}

	yanZm();
	$("#yzm").on("click", yanZm);
	$("#checkma").on("blur", function() {
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
					$("#tishi").text("正确!");
				} else {
					$("#tishi").text("验证码错误！");
				}
	
			}
	
		});
	});
	$(".register").on("click",function(){
		location.assign("/project3/html/register.html");
	});
});