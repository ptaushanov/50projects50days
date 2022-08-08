const loveMe = document.querySelector(".loveMe")
const times = document.getElementById("times")

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener("click", ({ layerX, layerY }) => {
    const currentTime = new Date().getTime()
    if (clickTime === 0 || currentTime - clickTime > 800) {
        clickTime = new Date().getTime()
        return
    }

    createHeart(layerX, layerY)
    clickTime = 0
})

function createHeart(x, y) {
    const heart = document.createElement("i")
    heart.classList.add("fas")
    heart.classList.add("fa-heart")

    heart.style.top = y + "px"
    heart.style.left = x + "px"

    setTimeout(() => heart.remove(), 1000)
    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked
}