"use strict";

do {
	var name = prompt("What is your name?");
} while (name == "" || name == null);

alert("Welcome " + name);

var confirmed = confirm("Do you like pizza?");

if (confirmed) {
	alert("Yeah you do!");
} else {
	alert("How could you not like pizza?!")
}

// todo: Ask the user for their name.
//       Keep asking if an empty input is provided.

// todo: Show an alert message that welcomes the user based on their input.

// todo: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.