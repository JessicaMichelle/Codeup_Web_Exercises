"use strict";
$(document).ready(function() {
	var title = $("main").css({
		"width":"650px",
		"font-size":"20px",
		"text-align":"justify"});
	var p = $("p").css({
		"font-size":"18px",
		"text-decoration":"underline",
		"font-weight":"bold"});
	var list = $("#list")
		.css("list-style-type", "none");
	var noBullets = $(".bullets")
		.css("font-size","18px")
	var underline = $(".underline").css({
		"text-decoration":"underline",
		"font-size":"18px"});
	var bold = $(".bold").css({
		"font-weight":"bold",
		"font-size":"18px"});
	var italics = $(".italics").css({
		"font-style":"italic",
		"font-size":"18px"});
	var green = $(".green").css({
		"color":"#7FFF00",
		"font-size":"18px"});
});