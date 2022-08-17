const password = document.getElementById("password")
const background = document.getElementById("background")
const unblurLength = 10

password.addEventListener("input", ({ target: { value } }) => {
    if (value.length > unblurLength) return
    const blurAmount = Math.round((1 - value.length / unblurLength) * 20)
    background.style.filter = `blur(${blurAmount}px)`
})
