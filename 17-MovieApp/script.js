const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c2c7d449ef2ca2db3acc0ed1ac8bd9cd&page=1"
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?api_key=c2c7d449ef2ca2db3acc0ed1ac8bd9cd&query=\""

const form = document.getElementById("form")
const search = document.getElementById("search")
const main = document.getElementById("main")

// Get the initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}


form.addEventListener("submit", (e) => {
    e.preventDefault()
    const searchTerm = search.value

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_URL + searchTerm)
        search.value = ''
        return
    }

    window.location.reload()
})

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie

        const movieElement = document.createElement("div")
        movieElement.classList.add("movie")

        movieElement.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="No image" />
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">
                    ${vote_average}
                </span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `

        main.appendChild(movieElement)
    })
}


function getClassByRate(vote) {
    return vote < 5 ? "red" : vote < 8 ? "orange" : "green"
}