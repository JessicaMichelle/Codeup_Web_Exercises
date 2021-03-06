"use script";

// todo:
// Create an array holding the names of the planets of our solar system (in order, starting closest to the sun).
var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

console.log("Original array of planets:")
console.log(planets);

// function for logging the planets array
function logPlanets() {
    console.log('Here is the list of planets:');
    console.log(planets);
}

console.log('Adding "The Sun" to the beginning of the planets array.');
// todo: Do what the log statement above says you will do.
logPlanets(planets.unshift("The Sun"));

console.log('Adding "Pluto" to the end of the planets array.');
// todo: Do what the log statement above says you will do.
logPlanets(planets.push("Pluto"));

console.log('Removing "The Sun" from the beginning of the planets array.');
// todo: Do what the log statement above says you will do.
logPlanets(planets.shift());

console.log('Removing "Pluto" from the end of the planets array.');
// todo: Do what the log statement above says you will do.
logPlanets(planets.pop());

console.log('Finding and logging the index of "Earth" in the planets array.');
// todo: Do what the log statement above says you will do.
var index = planets.indexOf("Earth");
console.log("The index of Earth is: " + index);

console.log('Using splice to remove the planet after Earth.');
// todo: Do what the log statement above says you will do.
logPlanets(planets.splice(planets.indexOf("Earth") + 1, 1));

console.log('Using splice to add back the planet after Earth.');
// todo: Do what the log statement above says you will do.
logPlanets(planets.splice(planets.indexOf("Earth") + 1, 0, "Mars"));

console.log('Reversing the order of the planets array.');
// todo: Do what the log statement above says you will do.
logPlanets(planets.reverse());

console.log('Sorting the planets array.');
// todo: Do what the log statement above says you will do.
logPlanets(planets.sort());