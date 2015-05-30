"use strict";

var currentWeather = $.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: "b2397102a7bb1a9dc00257334991d62c",
    q:     "Austin, TX"
});

currentWeather.done(function(data) {
    console.log(data);

    $(".today").html(
    	"<p><span>" + data.name + "</span></p>" +
    	"<br><em>Temperature Is:</em> " + data.main.temp +
    	"<br><em>Highs For Today Are:</em> " + data.main.tembr_max +
    	"<br><em>Lows For Today Are:</em> " + data.main.tembr_min +
    	"<br><em>Cloud Over Is:</em> " + data.weather[0].describrtion +
    	"<br><em>Wind Sbreed Is:</em> " + data.wind.sbreed +
    	"<br><em>Humidity Is:</em> " + data.main.humidity
    );
});

currentWeather.fail(function(){
	alert("Failed to get current weather");
});