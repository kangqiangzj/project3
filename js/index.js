require(["config"], function(){
	require(["jquery","template","load","carousel"], function($,template){
		$("#main").load("html/main.html",function(){
				$(document).ready(function(){
			          $('.slider1').bxSlider({
			            slideWidth: 720, 
						auto:true,
						autoHover:true,
			            slideMargin: 10
			          });
			          $('.slider2').bxSlider({
			            slideWidth: 247, 
						minSlides: 2,
						ticker: true,
						speed: 12000,
		           		maxSlides: 4,
			            slideMargin: 10
			          });
				    $(".banner2 .bx-wrapper").css("max-width",1200);
				    //显示热门搜索
				    $.ajax("/project3/mock/hot_search.json").done(function(responseData){
						var html = template("hot_search",{prods : responseData.data});
						console.log(responseData.data),
						console.log(html);
						$(".lunbo_top .left .left0").html(html);
					});
				    //鼠标移入移出左侧列表
					$(".banner1").on("mouseenter", "li", function(){
						$(this).css("background", "#ccc")
					}).on("mouseleave", "li", function(){
						$(this).css({
							"background":"none",
						});
					});
					//鼠标移入列表的其中一栏
					$(".show").hover(function(){
						$(".list_more").css({"display":"block"});
					},function(){
						$(".list_more").css({"display":"none"});
					})
					//显示二级菜单
					$.ajax("/project3/mock/list_more.json").done(function(responseData){
						//var html = template("list_template",{types : responseData.data});
						console.log(responseData.data)						
						//$(".list_more").html(html);
					});
		       });
		});
	});
	
/*	require(["jquery","template"],function($,template){
		$(document).ready(function(){
			$.ajax("/project3/mock/floors.json").done(function(responseData){
				var html = template("list_more",{types : responseData.data});
				console.log(responseData.data)
				
				$(".list_more").html(html);
			});
		});
	});*/
});