// ignore these lines for now
// just know that the variable 'color' will end up with a random value from the colors array
var colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'Green';

console.log(color);

if (color=="Green") {
	var message =("Green is the color of grass.");
}
else if (color=="Red") {
	var message =("Red is the color of blood.");
}
else if (color=="Orange") {
	var message =("Orange is the color of an orange.");
}
else if (color=="Yellow") {
	var message =("Yellow is the color of a banana.");
}
else if (color=="Blue") {
	var message =("Blue is the color of the sky.");
}
else {
	var message =("I do not know anything by that color.");
}

var favMessage = (favorite==color) ? "Your favorite color matches." : "Your favorite color does not match.";

console.log(message);
console.log(favMessage);

// TODO: Create a block of if/else statements to check for every color except indigo and violet.
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.