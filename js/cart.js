require(["config"], function(){
	require(["jquery","template","load"], function($,template){
		var prod = JSON.parse($.cookie("prod"));	
		console.log(prod);
		var cart_body = template("cart_body_template",{ prods : prod});
		$("#products_cart").html(cart_body);
		//删除商品
		$(".cart_body").on("click",".delete",function(){
			var _row = $(this).parents(".cart_body");
			var id = Number(_row.children(".id").val());
			var index = exist(id, prod);
			prod.splice(index,1);
			$.cookie("prod", prod, {expires:7, path:"/"});
			_row.remove();
			calcTotal();
		});
		
		/************************************************************/
		/* 全选 */
		$("#ck_all").click(function(){
			// 获取当前“全选”复选框的选中状态
			var status = $(this).prop("checked");
			// 将商品行前所有复选框选中状态设置为“全选”一致的状态
			console.log($(".ck"));
			$(".ck").prop("checked", status);
	
			// 更新合计
			calcTotal();
		});
		/* 部分选中 */
		$(".cart_body").on("click", ".ck",function(){
			var status = $(".ck:checked").length === prod.length;
			$("#ck_all").prop("checked", status);
			// 更新合计
			calcTotal();
		});
	
		/************************************************************/
		// 指定id的商品在所有已选购的数组中是否存在
		// 存在则返回其在数组中的下标，不存在返回-1
		function exist(id, products) {
			for (var i = 0; i < products.length; i++) {
				if (products[i].id == id)
					return i;
			}
			return -1;
		}
		// 计算合计金额的函数
		function calcTotal() {
			// 合计金额
			var sum = 0;
			$(".ck:checked").each(function(index, element){
				// 当前选中行中的获取小计金额
				var _sub = Number($(this).parents(".cart_body").children(".right").find(".xiaoji").text());
				//console.log(_sub);
				// 累加到合计金额中
				sum += _sub;
				//console.log(sum);
			});
			// 显示合计金额
			
			$(".total").find(".left").children("span").text(sum.toFixed(2));
		}
	});
});