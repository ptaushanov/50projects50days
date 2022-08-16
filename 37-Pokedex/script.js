const pokeContainer = document.getElementById("poke-container")
const pokemonCount = 150
const API_URL = "https://pokeapi.co/api/v2/pokemon/"

const colors = {
    fire: "#fddfdf",
    grass: "#defde0",
    electric: "#fcf7de",
    water: "#def3fd",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#98b3e6",
    psychic: "#eaeda1",
    flying: "#f5f5f5",
    fighting: "#e6e0d4",
    normal: "#f5f5f5"
}

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemonCount; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const res = await fetch(API_URL + id)
    const data = await res.json()

    createPokeCard(data)
}

const createPokeCard = (pokemon) => {
    const pokemonEl = document.createElement("div")
    pokemonEl.classList.add("pokemon")

    const { id, name, types, sprites } = pokemon
    const uppercaseName = name.at(0).toUpperCase() + name.substring(1);
    const paddedId = id.toString().padStart(3, '0')
    const artURL = sprites.other["official-artwork"].front_default
    const typeNames =
        types.map(typeObj => typeObj.type.name)
            .filter(typeName => colors.hasOwnProperty(typeName))
    const [mainType] = typeNames
    const pokemonTypes = typeNames.join(", ")
    const pokemonColors = typeNames.map(typeName => colors[typeName])

    const pokemonHTML = `
        <div class="img-container">
            <img src="${artURL}">
        </div>
        <div class="info">
            <span class="number">${paddedId}</span>
            <h3 class="name">${uppercaseName}</h3>
            <small class="type">Type:
                <span>${pokemonTypes}</span>
            </small>
        </div>
    `

    pokemonEl.style.background = pokemonColors.length > 1 ?
        `linear-gradient(to bottom, ${pokemonColors.join(", ")})` :
        colors[mainType]

    pokemonEl.innerHTML = pokemonHTML
    pokeContainer.appendChild(pokemonEl)
}


fetchPokemons()