(function(){dependenciesLoader(["$"],function(){b();$("#featuresBackgroundMask").hide();$("#featuresBackground").one("load",function(){$("#featuresBackgroundMask").fadeIn(function(){d();$("#featuresBackgroundMask").animate({opacity:1})})}).each(function(){if(this.complete){$(this).load()}});$(window).resize(function(){a()});function d(){var e=$("#featuresBackground");if($(window).width()<=768){e.css("height","400px");e.css("width","100%")}else{e.css("width","100%");e.css("height","auto")}$("#featuresBackgroundMask").width(e.width());$("#featuresBackgroundMask").height(e.height());$("#featuresBackgroundMask").css("marginTop",e.offset().top);if($(window).width()>768){var f=($("#featuresBackground").height()/2)-($("#featuresSection").height()/2)+$(".navbar").height();$("#featuresSection").css("marginTop",f+"px")}else{$("#featuresSection").css("marginTop",$(".navbar").height()+"px")}}function b(){}function c(){}function a(){c()}})}());