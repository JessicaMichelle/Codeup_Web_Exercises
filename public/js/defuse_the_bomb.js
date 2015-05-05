"use strict";
var detonationTimer = 5;
var interval;

// TODO: This function needs to be called once every second
function updateTimer() {
    if (detonationTimer == 0) {
        alert('BOOM!');
        document.body.innerHTML = '';
        location.assign("/img/explosion.jpg")
    } else if (detonationTimer > 0) {
        document.getElementById('timer').innerHTML = detonationTimer;
    };

    detonationTimer--;
};

interval = setInterval(updateTimer, 1000);

// TODO: When this function runs, it needs to
// cancel the interval/timeout for updateTimer()
function defuseTheBOM() {
    clearInterval(interval);
    location.assign("/img/defused.jpg")
}

// Don't modify anything below this line!
//
// This causes the defuseTheBOM() function to be called
// when the "defuser" button is clicked.
// We will learn about events in the DOM lessons
var defuser = document.getElementById('defuser');
defuser.addEventListener('click', defuseTheBOM, false);