document.getElementById("nextButton").addEventListener("click", fetchJoke)
document.getElementById("emoji1").addEventListener("click", addScore1)
document.getElementById("emoji2").addEventListener("click", addScore2)
document.getElementById("emoji3").addEventListener("click", addScore3)

const reportAcudits = [];
let counter = -1;

function fetchWeather() {
    const endpoint = 'https://api.openweathermap.org/data/2.5/weather';
    const city = 'Barcelona';
    const units = 'metric';
    const apiKey = '5dacd27a842b40d35e21327eb4eefbef';

    const url = `${endpoint}?q=${city}&units=${units}&appid=${apiKey}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const { weather, main } = data;
        const icon = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
        const temp = main.temp;

        document.getElementById("temperature").innerHTML = `<div class="h2"><strong> ${temp}ºC </strong></div>`;
        document.getElementById("wheater").innerHTML = `<img class="" src=${icon} alt="">`;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

function fetchJokeDad() {
    debugger
    fetch('https://icanhazdadjoke.com/', {
    headers: {
        'Accept': 'application/json'
    }
    })
    .then(response => response.json())
    .then(jokeJSON => {
        console.log(jokeJSON.joke);
        document.getElementById("HTMLjoke").innerHTML = jokeJSON.joke;
        reportAcudits.push(
            {
                joke: jokeJSON.joke,
                date: (new Date()).toISOString()
            }
        );
        console.log(reportAcudits);
    })
    .catch(error => console.error(error));

    counter = counter + 1;

    document.getElementById("emoji1").style.visibility = "visible";
    document.getElementById("emoji2").style.visibility = "visible";
    document.getElementById("emoji3").style.visibility = "visible";
}

function addScore1() {
    debugger
    reportAcudits[counter].score = 1;
    console.log(reportAcudits);
}

function addScore2() {
    debugger
    reportAcudits[counter].score = 2;
    console.log(reportAcudits);
}

function addScore3() {
    debugger
    reportAcudits[counter].score = 3;
    console.log(reportAcudits);
}

function fetchChuckJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(jokeJSON => {
        console.log(jokeJSON.value);
        document.getElementById("HTMLjoke").innerHTML = jokeJSON.value;
        reportAcudits.push(
            {
                joke: jokeJSON.value,
                date: (new Date()).toISOString()
            }
        );
        console.log(reportAcudits);
    })
    .catch(error => console.error(error));

    counter = counter + 1;
}

function fetchJoke() {
    if ((counter % 2) == 0) {

        fetchChuckJoke();

    } else {

        fetchJokeDad();

    }
}

fetchWeather();