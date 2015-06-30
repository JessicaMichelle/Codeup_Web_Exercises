"use strict";

(function() {
		var app = angular.module("controllerTest", []);

		 app.controller("CartController", function() {
		 	this.items = [];
		 	this.newItem = {
		 		quantity: 1
		 	};
		 	console.log(this.items)
		 	this.addItem = function() {
		 		this.items.push(this.newItem);
		 		this.newItem = {
		 			quantity: 1
		 		};
	 			console.log(this.items)
		 	}

    });
})()