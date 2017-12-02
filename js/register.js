require(["config"], function(){
	require(["jquery","load","cookie"], function($){
			console.log("11111")
			$.cookie('login_user', null); 
	});
});