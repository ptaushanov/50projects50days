const container = document.querySelector(".container")
const IMAGE_URL = "https://source.unsplash.com/random"
const rows = 10

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement("img")
    img.src = `${IMAGE_URL}/${getRandomSize()}`
    container.appendChild(img)
}

function getRandomSize() {
    return `${getRandomNumber()}x${getRandomNumber()}`
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 300
}