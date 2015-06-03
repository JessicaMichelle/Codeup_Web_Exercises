"use strict";
// Gets the OpenWeatherMap API
$.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
    APPID: "b2397102a7bb1a9dc00257334991d62c",
    // Passes the latitude you are looking for.
    lat:   29.424122,
    // Passes the longitude you are looking for.
    lon:   -98.493628,
    // Converts temperature to Fareinheit.
    units: "imperial",
    // States how many days you want to see from 1-16.
    cnt:   3
    // States that once the request is done to run the function.
}).done(function(data) {
    // Changes the h3 with class of city to display whatever city name is being found.
    $(".city").html(data.city.name);
    console.log(data);
    // Looping through the days
    data.list.forEach(function(day, i) {
        console.log(day);
        // stating for each div with the class of .day# to increase each loop
        // while also changing the html inside of that div to the info noted below.
        $(".day" + (i + 1)).html(
            '<img src ="http://openweathermap.org/img/w/' + day.weather[0].icon + '.png">' +
            "<p><span>" + day.weather[0].main + ":</span> " + day.weather[0].description + "</p>" +
            "<p><span>Humidity:</span> " + day.humidity + "</p>" +
            "<p><span>Wind:</span> " + day.speed + "</p>" +
            "<p><span>Pressure:</span> " + day.pressure + "</p>");

    });
// Will alert if there was an issue getting the current weather.
}).fail(function(){
	alert("Failed to get current weather");
});

// $("#search-form").submit(function(e){
//     e.preventDefault();
//     var cityName = $("#search").val();
// })