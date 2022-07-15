const loadText = document.querySelector(".loading-text")
const bg = document.querySelector(".bg")

let load = 0;
const blurringInterval = setInterval(blurring, 30)

const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

function blurring() {
    load++
    if (load > 99) { clearInterval(blurringInterval) }
    loadText.innerText = load + "%";
    loadText.style.opacity = map(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${map(load, 0, 100, 30, 0)}px)`
}