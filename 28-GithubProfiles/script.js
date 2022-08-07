const API_URL = "https://api.github.com/users"

const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")

async function getUser(username) {
    try {
        const { data } = await axios.get(`${API_URL}/${username}`)
        createUserCard(data)
        getRepos(username)
    } catch (error) {
        if (error.response.status === 404) {
            createErrorCard("No profile with this username")
        }
    }
}

async function getRepos(username) {
    const config = {
        params: { sort: "created" }
    }

    try {
        const { data } = await axios.get(`${API_URL}/${username}/repos`, config)
        addReposToCard(data)
    } catch (_) {
        createErrorCard("Problem fetching user's repositories")
    }
}

function createUserCard(user) {
    const {
        avatar_url, name, username, bio,
        followers, following, public_repos
    } = user;

    const cardHTML = `
    <div class="card">
            <div>
                <img src="${avatar_url}" alt="${username}" class="avatar">
            </div>
            <div class="user-info">
                <h2>${name}</h2>
                <p>${bio}</p>

                <ul>
                    <li>${followers} <strong>Followers</strong></li>
                    <li>${following} <strong>Following</strong></li>
                    <li>${public_repos} <strong>Repositories</strong></li>
                </ul>

                <div id="repos">
                    
                </div>
            </div>
        </div>
    `
    main.innerHTML = cardHTML
}

function createErrorCard(message) {
    const cardHTML = `
        <div class="card">
            <h1>${message}</h1>
        </div>
    `
    main.innerHTML = cardHTML
}

function addReposToCard(repos) {
    const reposEl = document.getElementById("repos")
    repos
        .slice(0, 10)
        .forEach(repo => {
            const repoEl = document.createElement("a")

            repoEl.classList.add("repo")
            repoEl.href = repo.html_url
            repoEl.target = "_blank"
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
        })
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const user = search.value

    if (user) {
        getUser(user)
        search.value = ""
    }
})
