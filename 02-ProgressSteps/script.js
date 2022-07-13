const progress = document.getElementById("progress")
const prev = document.getElementById("pre")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle")

let currentActive = 1;

next.addEventListener("click", () => {
    if (currentActive < circles.length) { currentActive++ }
    update();
})

prev.addEventListener("click", () => {
    if (currentActive > 1) { currentActive-- }
    update();
})

function update() {
    circles.forEach((circle, index) => {
        circle.classList.remove("active")
        if (index + 1 > currentActive) { return; }
        circle.classList.add("active")
    })

    const segmentsCount = circles.length - 1
    const activeSegmentsCount = currentActive - 1
    const width = activeSegmentsCount / segmentsCount * 100

    progress.style.width = `${width}%`

    if (currentActive === 1) { prev.disabled = true }
    else { prev.disabled = false }

    if (currentActive === circles.length) { next.disabled = true }
    else { next.disabled = false }
}
