"use strict";

$(document).ready(function() {
	$("li").click(function(event) {
		event.preventDefault();
		$(this).next().toggleClass("invisible");
	});
});