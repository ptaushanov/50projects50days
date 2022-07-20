const jokeElement = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")
const JOKES_URL = "https://icanhazdadjoke.com/"

const fetchConfig = {
    headers: {
        Accept: "application/json"
    }
}

const fetchJoke = async () => {
    const response = await fetch(JOKES_URL, fetchConfig)
    if (response.status !== 200) { return "Failed to fetch a dad joke!" }
    const json = await response.json()
    return json.joke;
}

const displayJoke = async () => {
    const joke = await fetchJoke()
    jokeElement.innerText = joke
}

displayJoke()
jokeBtn.addEventListener("click", displayJoke)
