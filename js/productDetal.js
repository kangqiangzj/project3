require(["config"], function(){
	require(["jquery","template","load","cookie"], function($,template){
		/*$("#main").load("html/productDetal.html",function(){
			
		});*/
		
		var _products = $.cookie("products");
		var products= eval ("(" + _products + ")");
		console.log(products[0]);
		var prod = template("product_template",{ prod : products[0]}),
			prod_detal = template("product_detal_template",{ prod : products[0]});
		//console.log(prod);
		$(".p_nav .box").html(prod);
		
		$(".buy").html(prod_detal);
		$(".price0_right").hover(function(){
			$(".price0_right").css({
				"border": "2px solid #ccc",
				"border-bottom":"none"
			});
			$(".price0_right .xiala").css("background","url(/project3/images/sjt.png) no-repeat center center");
			$(".erweima").css({"display":"block","border":"2px solid #ccc","border-top":"none"});
		},function(){
			$(".price0_right .xiala").css("background","url(/project3/images/xjt.png) no-repeat center center");
			$(".erweima").css("display","none");
			$(".price0_right").css("border","none");
		});
	});
});