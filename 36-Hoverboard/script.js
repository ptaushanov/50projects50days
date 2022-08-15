const container = document.getElementById("container")
const colorPresets = document.querySelectorAll(".color-preset")
const randomLightShow = document.getElementById("random-lightshow")

let saturation = "50%", lightness = "80%", interval = null
const randomColor = () => `hsl(${Math.round(Math.random() * 360)}, ${saturation}, ${lightness})`
const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div")
    square.classList.add("square")
    square.addEventListener("mouseover", setColor)
    square.addEventListener("mouseout", removeColor)
    container.appendChild(square)
}


colorPresets.forEach(preset => {
    preset.addEventListener("click", setColorPreset)
})

randomLightShow.addEventListener("click", () => {
    randomLightShow.classList.toggle("active")

    if (randomLightShow.classList.contains("active")) {
        interval = setInterval(lightUpBoard, 2000)
        return
    }
    clearInterval(interval)
})


function setColor({ target }) {
    const color = randomColor()
    target.style.backgroundColor = color
    target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor({ target }) {
    target.style.backgroundColor = "#1d1d1d"
    target.style.boxShadow = "0 0 2px #000000"
}

function setColorPreset({ target }) {
    colorPresets.forEach(preset => preset.classList.remove("active"))
    target.classList.add("active")

    saturation = target.dataset.saturation
    lightness = target.dataset.lightness
}

const squares = document.querySelectorAll(".square")
function lightUpBoard() {
    squares.forEach(square => {
        if (Math.random() < .9) return
        setColor({ target: square })
        setTimeout(removeColor, 5000, { target: square })
    })
}