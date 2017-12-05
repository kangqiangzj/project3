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
					$(".contain .pic img").hover(function(){
						$(this).stop().animate({
							width: 215,
	                        height: 215
						},200);
					},function(){
							$(this).stop().animate({
								width: 208,
		                        height: 208
							},200);
					});
					// 指定id的商品在所有已选购的数组中是否存在
					// 存在则返回其在数组中的下标，不存在返回-1
					function exist(id, products) {
						for (var i = 0; i < products.length; i++) {
							if (products[i].id == id)
								return i;
						}
						return -1;
					}
					//鼠标点击商品实现跳转
					$(".floor").on("click",".products",function(){
						//先清除之前的商品
						$.cookie("products", null,{path:'/'});
						/* 将当前点击的"加入购物车"所在盒子商品数据保存到对象中 */
						// 获取"加入购物车"的父节点
						var _brother = $(this).parent().prev();
						var product = {
							floor : _brother.text(),
							id : $(this).children(".id0").find(".id").val(),
							title : $(this).children(".title").find("a").text(),
							price : $(this).children(".price").find("span").text(),
							img : $(this).children(".pic").find("img").attr("src"),
							amount : 1
						};
						/* cookie操作 */
						$.cookie.json = true;
						// 将 cookie 中所有购物车中的商品读取出来
						var _products = $.cookie("products") || [];
						// 当前商品是否已被选购过
						var index = exist(product.id, _products);
						if (index !== -1) { // 已选购，数量自增
							_products[index].amount++;
						} else { // 未选购，将当前选购商品对象添加到数组中
							_products.push(product);
						}
						// 将数组重新保存回 cookie
						$.cookie("products", _products, {expires:7, path:"/"});
						location.assign("/project3/html/productDetal.html");
					});
									
				});
				$(".m").hover(function(){
					$(".m img").stop().animate({
						width:180,
						height:180
					},100)
				},function(){
					$(".m img").stop().animate({
						width:170,
						height:170
					},100)
				});		
			})
		});
	});
});
	
