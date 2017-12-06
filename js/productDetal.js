require(["config"], function(){
	require(["jquery","template","load","cookie","zoom"], function($,template){
		
		//获取商品信息
		var products = $.cookie("products");
		var id = products[0].id;
		//var products= eval ("(" + _products + ")");
		
		var prod = template("product_template",{ prod : products[0]}),
			prod_detal = template("product_detal_template",{ prod : products[0]}),
			left_template = template("left_template",{ prod : products[0]});	
		//渲染模板
		$(".p_nav .box").html(prod);		
		$(".buy").html(prod_detal);		
		$(".title_top").html(left_template);
		
		var chima = null,
			color = null;
		$(".chima_p1").children().on("click",function(){
			$(this).siblings().css("border-color","#999789")
			$(this).css("border-color","red");
			chima = $(this).text();
		});
		$(".color_p1").children().on("click",function(){
			$(this).siblings().css("border-color","#999789")
			$(this).css("border-color","red");
			color = $(this).text();
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
			if ($(this).is(".top")) { // 数量加
				products[0].amount++;												
			} else if ($(this).is(".bottom")) { // 数量减
				if(!(products[0].amount<=1))
					products[0].amount--;
			}else{
				return;
			}
			// 保存回cookie		
			$.cookie("products", products, {expires:7, path:"/"});
			// 显示加/减后的数量
			var amount = products[0].amount;
			$(".buy_amount_middle_left").text(amount);
			//显示小计
			var danjia = Number($(".price0_sp2").text().slice(1)),
				xiaoji = 0;
			xiaoji = danjia * amount;
			$(".prod_price").text("￥" + xiaoji);
			// _row.find(".amount_val").attr("value", _prod.amount);
			// 显示小计金额
			//_row.children(".sub").text((_prod.price * _prod.amount).toFixed(2));
			// 更新合计
			//calcTotal();*/
		});
		//添加到购物车
		$(".add_to_cart").on("click",function(){
			var father = $(this).parent().parent().parent();
			var prod = {
				id : id,
				chima : chima,
				color : color,
				title : father.children(".prod_right").find(".p1").text().slice(0,30),
				price : father.children(".prod_right").children(".price0").children(".price0_left").find(".price0_sp2").text().slice(1),
				xiaoji : father.children(".prod_right").children(".buy_amount").find(".prod_price").text().slice(1),
				img : father.children(".prod_left").children(".prod_middle_pic").find("img").attr("src"),
				amount : Number(father.children(".prod_right").children(".buy_amount").find(".buy_amount_middle_left").text())
			};
			/* cookie操作 */
			// 将 cookie 中所有购物车中的商品读取出来
			var prods = $.cookie("prod") || [];
			// 当前商品是否已被选购过
			var index = exist(prod.id, prods);
			if (index !== -1) { // 已选购，数量自增
				var a = Number(prods[index].amount);
				prods[index].amount = a + prod.amount;
			} else { // 未选购，将当前选购商品对象添加到数组中
				prods.push(prod);
			}
			console.log(prods);//[]
			// 将数组重新保存回 cookie
			$.cookie.json = true;
			$.cookie("prod", prods, {expires:7, path:"/"});
			location = "/project3/html/cart.html";
						
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
	});
});