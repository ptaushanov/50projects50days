const boxesEl = document.getElementById("boxes")
const btn = document.getElementById("btn")
const SIZE = 4, BOX_COUNT = SIZE ** 2

btn.addEventListener("click", () => {
    boxesEl.classList.toggle("big")
})

for (let i = 0; i < BOX_COUNT; i++) {
    const x = i % SIZE * -125
    const y = Math.floor(i / SIZE) * -125
    const box = document.createElement("div")

    box.classList.add("box")
    box.style.backgroundPosition = `${x}px ${y}px`
    boxesEl.appendChild(box)
}