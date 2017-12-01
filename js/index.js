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
			    //鼠标移入移出左侧列表
				$(".banner1").on("mouseenter", "li", function(){
					$(this).css("background", "#ccc")
				}).on("mouseleave", "li", function(){
					$(this).css({
						"background":"none",
					});
				});
				//鼠标移入列表的其中一栏
				$(".list").on("mouseenter",".show",function(){
					$(".list_more").css({"display":"block"}).animate({
						width:690
					},200);
				});
				$(".list").on("mouseenter",".show2",function(){
					$(".list_more").css({"display":"none","width":0});
				});
				$(".list").on("mouseleave",".list_more",function(){
					$(".list_more").css({"display":"none","width":0});
				});
				
				$(".banner1_left").on("mouseleave",".list",function(){
					$(".list_more").css({"display":"none","width":0});
				});
				
				//模板显示页面信息
				$.ajax("/project3/mock/list_more.json").done(function(responseData){
					var list = template("list_template",{types : responseData.data1}),
						news = template("news_template",{messages : responseData.data2}),
						hot = template("hot_search",{prods : responseData.data3}),
						floor = template("floor_template",{floors : responseData.data4});
					//显示二级菜单&
					$(".list_more").html(list);
					//显示右侧新闻栏
					$(".news_show").html(news);
					//显示热门搜索
					$(".lunbo_top .left .left0").html(hot);
					//楼层显示
					$(".contain").html(floor);	
					
					//商品列表鼠标移入移出
					$(".contain .pic img").stop().hover(function(){
						$(this).animate({
							width: 215,
	                        height: 215
						},200);
					},function(){
							$(this).animate({
								width: 208,
		                        height: 208
							},200);
					});
					//鼠标点击商品实现跳转
					$(".shangping").on("click",".products",function(){
						//location:"/project3/html/productDetal.html";
						location.assign("/project3/html/productDetal.html");
					});
					
				});
				$(".m").stop().hover(function(){
					$(".m img").animate({
						width:180,
						height:180
					},500)
				},function(){
					$(".m img").animate({
						width:170,
						height:170
					},500)
				});		
			})
		});
	});
});
	
