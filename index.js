document.getElementById("nextButton").addEventListener("click", fetchJoke)

function fetchJoke() {
    fetch('https://icanhazdadjoke.com/', {
    headers: {
        'Accept': 'application/json'
    }
    })
    .then(response => response.json())
    .then(jokeJSON => {
        console.log(jokeJSON.joke);
        document.getElementById("HTMLjoke").innerHTML = jokeJSON.joke;
    })
    .catch(error => console.error(error));
}

fetchJoke();
