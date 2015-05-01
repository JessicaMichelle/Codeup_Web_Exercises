"use script";

var library = [
	{
		"Title": "Harry Potter And The Sorcers Stone",
		"Author": {
			"firstName": "J.K.",
			"lastName": "Rowling"
		},
		"Year": 1997
	},
	{
		"Title": "Harry Potter And The Chamber Of Secrets",
		"Author": {
			"firstName": "J.K.",
			"lastName": "Rowling"
		},
		"Year": 1998
	},
	{
		"Title": "Harry Potter And The Prisoner Of Azkaban",
		"Author": {
			"firstName": "J.K.",
			"lastName": "Rowling"
		},
		"Year": 1999
	},
	{
		"Title": "Harry Potter And The Goblet Of Fire",
		"Author": {
			"firstName": "J.K.",
			"lastName": "Rowling"
		},
		"Year": 2000
	},
	{
		"Title": "Harry Potter And The Order Of The Phoenix",
		"Author": {
			"firstName": "J.K.",
			"lastName": "Rowling"
		},
		"Year": 2003
	},
	{
		"Title": "Harry Potter And The Half-Blooded Prince",
		"Author": {
			"firstName": "J.K.",
			"lastName": "Rowling"
		},
		"Year": 2005
	},
	{
		"Title": "Harry Potter And The Deathly Hallows",
		"Author": {
			"firstName": "J.K.",
			"lastName": "Rowling"
		},
		"Year": 2007
	}
]

// console.log(books);

library.forEach(function (books, index){

	console.log("Book #" + (index + 1));
	console.log("Title: " + books.Title);
	console.log("Author: " + books.Author.firstName + " " + books.Author.lastName);
	console.log("Year " + books.Year);
	console.log("----------");
});