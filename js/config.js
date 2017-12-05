require.config({
	baseUrl : "/",
	paths : {
		"jquery" : "project3/lib/jquery/jquery-1.9.1.min",//["https://code.jquery.com/jquery-1.12.4.min.js","lib/jquery/jquery-1.1.12.4"]
		"yzm" : "project3/js/yzm",
		"cookie" : "project3/lib/jquery_plugins/jquery.cookie",
		"load" : "project3/js/loadHeaderFooter",
		"template" :"project3/lib/arttemplate/template",
		"carousel" : "project3/lib/jquery_plugins/jquery.bxslider",
		"zoom" : "project3/lib/jquery_plugins/jquery.elevateZoom-3.0.8.min"		
	},
	shim : {
		"carousel" : {
			deps : ["jquery"]
		},
		"zoom" : {
			deps : ["jquery"]
		}
	}
/*	shim : {
		"carousel" : {
			deps : ["jquery"]
		}
	}*/
});
