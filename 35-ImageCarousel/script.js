const imgsContainer = document.getElementById("imgs")
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")
const imgsList = document.querySelectorAll("#imgs img")

const listLength = imgsList.length
let index = 0
let interval = setInterval(run, 2000)

function run() {
    index++
    changeImage()
}

function changeImage() {
    index = (listLength + index) % listLength
    imgsContainer.style.transform = `translateX(${-500 * index}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener("click", () => {
    index++
    changeImage()
    resetInterval()
})


leftBtn.addEventListener("click", () => {
    index--
    changeImage()
    resetInterval()
})