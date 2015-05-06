
"use strict";

// todo: get the main header element by id
// var mainHeader = ;

var mainHeader = document.getElementById("main-header");

// todo: set inner html of mainHeader to "JavaScript is Cool"

mainHeader.innerHTML = "JavaScript Is Cool!";

// todo: get the sub header element by id
// var subHeader = ;

var subHeader = document.getElementById("sub-header");

// todo: set the text color of subHeader to blue

subHeader.style["font-color"] = "blue";

// todo: get all list items
// var listItems = ;

var listItems = document.getElementsByTagName("li");

// todo: set text color on every other list item to grey

for (var i = 0; i < listItems.length; i++) {
    if (i % 2 != 0) {
        listItems[i].style["color"] = "#ddd";
    };
    var dbid = listItems[i].attributes["data-dbid"].value;
    
    if (dbid == "1") {
        listItems[i].style["color"] = "blue";
    }
};

// todo: set text color of li with dbid = 1 to blue

// todo: get all elements with class name sub-paragraph
// var subParagraphs = ;

var subParagraphs = document.getElementsByClassName("sub-paragraph");

// todo: change the text in the first sub paragraph to "Mission Accomplished!"

subParagraphs[0].innerHTML = "Mission Accomplished!";