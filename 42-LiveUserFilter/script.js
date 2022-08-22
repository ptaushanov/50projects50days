const result = document.getElementById("result")
const filter = document.getElementById("filter")
const listItems = []

getData()

filter.addEventListener("input", ({ target: { value } }) => filterData(value))

async function getData() {
    const res = await fetch("https://randomuser.me/api?results=50")
    const { results } = await res.json()

    result.innerHTML = ''

    results.forEach(({ picture, name, location }) => {
        const li = document.createElement("li")
        const userHTML = `
            <img src="${picture.large}" alt="${name.first}">
            <div class="user-info">
                <h4>${name.first} ${name.last}</h4>
                <p>${location.city}, ${location.country}</p>
            </div>
        `
        li.innerHTML = userHTML
        listItems.push(li)
        result.appendChild(li)
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        const lowerItemText = item.innerText.toLowerCase()
        const lowerSearchTerm = searchTerm.toLowerCase()
        if (lowerItemText.includes(lowerSearchTerm)) {
            item.classList.remove("hide")
            return
        }
        item.classList.add("hide")
    })
}
