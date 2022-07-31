const buttons = document.querySelectorAll(".ripple")

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        console.log("click")
        const { layerX, layerY, target } = event
        createRipple(target, layerX, layerY)
    })
})

function createRipple(target, x, y) {
    const ripple = document.createElement("span")
    ripple.classList.add("circle")
    ripple.style.top = y + "px"
    ripple.style.left = x + "px"

    target.appendChild(ripple)
    setTimeout(() => { ripple.remove() }, 1000)
}