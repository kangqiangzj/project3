require(["config"], function(){
	require(["jquery","template","load","cookie","zoom"], function($,template){
		
		//获取商品信息
		var products = $.cookie("products");
		//console.log(_products);
		//var products= eval ("(" + _products + ")");
		
		var prod = template("product_template",{ prod : products[0]}),
			prod_detal = template("product_detal_template",{ prod : products[0]}),
			left_template = template("left_template",{ prod : products[0]});	
		//渲染模板
		$(".p_nav .box").html(prod);		
		$(".buy").html(prod_detal);		
		$(".title_top").html(left_template);
		
		$(".chima_p1").children().on("click",function(){
			$(this).siblings().css("border-color","#999789")
			$(this).css("border-color","red");
		});
		$(".color_p1").children().on("click",function(){
			$(this).siblings().css("border-color","#999789")
			$(this).css("border-color","red");
		});
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
		
		
		//商品图片放大镜
		var html=`<img src="${products[0].img}",data-zoom-image="${products[0].img}"/>`
		$(".prod_middle_pic").html(html);
    	$(".prod_middle_pic").children("img").elevateZoom({zoomType:"lens",lensShape:"round",lensSize:80});
		/*增加删除数量*/
		$(".buy_amount_middle").on("click", ".top,.bottom", function(){
			//console.log("dasd");
			var amount = products[0].amount;
			if ($(this).is(".top")) { // 数量加
				products[0].amount++;												
			} else if ($(this).is(".bottom")) { // 数量减
				products[0].amount--;
			}
			// 保存回cookie
			
			$.cookie("products", products, {expires:7, path:"/"});
			console.log($.cookie("products"));
			// 显示加/减后的数量
			$(".buy_amount_middle_left").text(amount);
			// _row.find(".amount_val").attr("value", _prod.amount);
			// 显示小计金额
			//_row.children(".sub").text((_prod.price * _prod.amount).toFixed(2));
	
			// 更新合计
			//calcTotal();*/
		});
	
	});
});