const textEl = document.getElementById("text")
const speedEl = document.getElementById("speed")
const text = "We love programming!"

let index = 1,
    speed = parseInt(speedEl.value),
    speedConstant = 1000;

createTextTyping()

speedEl.addEventListener("input", ({ target: { value } }) => {
    speed = parseInt(value)
})

function createTextTyping() {
    const timeoutSpeed = Math.round(speedConstant / speed)

    textEl.style.opacity = index / text.length;
    textEl.innerText = text.substring(0, index + 1);
    index = (index + 1) % text.length;

    setTimeout(createTextTyping, timeoutSpeed)
}