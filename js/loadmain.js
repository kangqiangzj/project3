define(["jquery","carousel"],function($){
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
       });
	});
});