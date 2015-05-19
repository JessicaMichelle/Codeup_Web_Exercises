"use strict";

$(document).ready(function(){
	$("#btn-move").click(function() {
		$("#animate-box")
			.animate({left: "+=100px"}, 1000)
	});
	$("#btn-scale-down").click(function() {
		$("#animate-box")
			.animate({width: "+=4em"}, 1000)
	});
	$("#btn-disappear").click(function() {
		$("#animate-box")
			.animate({opacity: "0"}, 1000)
	});
	$("#btn-show").click(function() {
		$("#animate-box")
			.animate({opacity: "1"}, 1000)
	});
	$("#btn-all").click(function() {
		$("#animate-box")
			.animate({
				left: "+=100px",
				width: "+=4em"}, 1000)
			.animate({
				opacity: "0"}, 1000)
			.animate({
				opacity: "1"
			}, 1000)
	});

            // todo: Once all is done see if you can chain all the animations
            // to happen with the `Animate all` button.
            // Refresh to start over before hitting the button.
            

});
    