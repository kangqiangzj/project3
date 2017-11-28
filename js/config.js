require.config({
	baseUrl : "/",
	paths : {
		"jquery" : "httpshop213.v.ev123.netvip_shop213.html/lib/jquery/jquery-1.12.4.min",//["https://code.jquery.com/jquery-1.12.4.min.js","lib/jquery/jquery-1.1.12.4"]
		"cookie" : "httpshop213.v.ev123.netvip_shop213.html/lib/jquery_plugins/jquery.cookie",
		"load" : "httpshop213.v.ev123.netvip_shop213.html/js/loadHeaderFooter",
		"zoom" : "httpshop213.v.ev123.netvip_shop213.html/lib/jquery_plugins/jquery.elevateZoom-3.0.8.min"
	},
	shim : {
		"zoom" : {
			deps : ["jquery"]
		}
	}
});
