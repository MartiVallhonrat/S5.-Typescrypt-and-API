document.getElementById("nextButton").addEventListener("click", fetchJoke);
document.getElementById("emoji1").addEventListener("click", addScore1);
document.getElementById("emoji2").addEventListener("click", addScore2);
document.getElementById("emoji3").addEventListener("click", addScore3);
var reportAcudits = [];
var counter = -1;
function fetchWeather() {
    var endpoint = 'https://api.openweathermap.org/data/2.5/weather';
    var city = 'Barcelona';
    var units = 'metric';
    var apiKey = '5dacd27a842b40d35e21327eb4eefbef';
    var url = "".concat(endpoint, "?q=").concat(city, "&units=").concat(units, "&appid=").concat(apiKey);
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var weather = data.weather, main = data.main;
        var icon = "http://openweathermap.org/img/w/".concat(weather[0].icon, ".png");
        var temp = main.temp;
        document.getElementById("temperature").innerHTML = "<div class=\"h2\"><strong> ".concat(temp, "\u00BAC </strong></div>");
        document.getElementById("wheater").innerHTML = "<img class=\"\" src=".concat(icon, " alt=\"\">");
    })["catch"](function (error) {
        console.error('Error fetching data:', error);
    });
}
function fetchJokeDad() {
    debugger;
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(function (response) { return response.json(); })
        .then(function (jokeJSON) {
        console.log(jokeJSON.joke);
        document.getElementById("HTMLjoke").innerHTML = jokeJSON.joke;
        reportAcudits.push({
            joke: jokeJSON.joke,
            date: (new Date()).toISOString()
        });
        console.log(reportAcudits);
    })["catch"](function (error) { return console.error(error); });
    counter = counter + 1;
    document.getElementById("emoji1").style.visibility = "visible";
    document.getElementById("emoji2").style.visibility = "visible";
    document.getElementById("emoji3").style.visibility = "visible";
}
function addScore1() {
    debugger;
    reportAcudits[counter].score = 1;
    console.log(reportAcudits);
}
function addScore2() {
    debugger;
    reportAcudits[counter].score = 2;
    console.log(reportAcudits);
}
function addScore3() {
    debugger;
    reportAcudits[counter].score = 3;
    console.log(reportAcudits);
}
function fetchChuckJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(function (response) { return response.json(); })
        .then(function (jokeJSON) {
        console.log(jokeJSON.value);
        document.getElementById("HTMLjoke").innerHTML = jokeJSON.value;
        reportAcudits.push({
            joke: jokeJSON.value,
            date: (new Date()).toISOString()
        });
        console.log(reportAcudits);
    })["catch"](function (error) { return console.error(error); });
    counter = counter + 1;
}
function changeBackground() {
    document.getElementById("blobBackground").style.backgroundImage = "url('svg/blob".concat(Math.floor(Math.random() * 9), ".svg')");
}
function fetchJoke() {
    if ((counter % 2) == 0) {
        fetchChuckJoke();
    }
    else {
        fetchJokeDad();
    }
    changeBackground();
}
