const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");
const fillEl = document.getElementById("fill");
const ctx = canvas.getContext("2d");

let size = 10, color = "#000000";
let x, y, isPressed = false;

canvas.addEventListener("mousedown", (event) => {
    isPressed = true;
    x = event.offsetX;
    y = event.offsetY;
})

canvas.addEventListener("mouseup", () => {
    isPressed = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener("mousemove", (event) => {
    if (isPressed) {
        const x2 = event.offsetX;
        const y2 = event.offsetY;

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

colorEl.addEventListener("change", (event) => {
    color = event.target.value
})

increaseBtn.addEventListener("click", () => {
    const nextSize = size + 5
    size = nextSize > 50 ? size : nextSize;
    sizeEl.innerText = size
})

decreaseBtn.addEventListener("click", () => {
    const nextSize = size - 5
    size = nextSize < 5 ? size : nextSize;
    sizeEl.innerText = size
})

clearEl.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

fillEl.addEventListener("click", () => {
    ctx.beginPath()
    ctx.fillStyle = color
    ctx.fillRect(0, 0, canvas.width, canvas.height)
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}