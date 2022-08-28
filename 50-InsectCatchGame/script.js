const screens = document.querySelectorAll(".screen")
const chooseInsectBtns = document.querySelectorAll(".choose-insect-btn")
const startBtn = document.getElementById("start-btn")
const gameContainer = document.getElementById("game-container")
const timeEl = document.getElementById("time")
const scoreEl = document.getElementById("score")
const messageEl = document.getElementById("message")

let seconds = 0, score = 0, selectedInsect = {}

startBtn.addEventListener("click", () => {
    const [mainScreen] = screens
    mainScreen.classList.add("up")
})

chooseInsectBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const img = btn.querySelector("img")
        const src = img.getAttribute("src")
        const alt = img.getAttribute("alt")
        selectedInsect = { src, alt }
        const [, secondScreen] = screens
        secondScreen.classList.add("up")
        setTimeout(createInsect, 1000)
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    seconds++
    const m = Math.floor(seconds / 60)
        .toString()
        .padStart(2, '0')
    const s = Math.floor(seconds % 60)
        .toString()
        .padStart(2, '0')

    timeEl.innerText = `Time: ${m}:${s}`
}

function createInsect() {
    const insect = document.createElement("div")
    insect.classList.add("insect")

    const [left, top] = getRandomLocation()
    insect.style.top = `${top}px`
    insect.style.left = `${left}px`


    const { src, alt } = selectedInsect
    const rotationAngle = getRandomAngle()
    insect.innerHTML = `
        <img src="${src}" alt="${alt}" 
            style="transform: rotate(${rotationAngle}deg)" />
    `

    insect.addEventListener("click", catchInsect)
    gameContainer.appendChild(insect)
}

function getRandomLocation() { // [x, y]
    return [
        Math.floor(Math.random() * (window.innerWidth - 200) + 100),
        Math.floor(Math.random() * (window.innerHeight - 200) + 100)
    ]
}

function getRandomAngle() {
    return Math.floor(Math.random() * 360)
}

function catchInsect() {
    increaseScore()
    this.classList.add("caught")
    setTimeout(() => this.remove(), 2000)
    addInsects()
}

function addInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}

function increaseScore() {
    score++
    if (score > 19) messageEl.classList.add("visible")
    scoreEl.innerText = `Score: ${score}`
}