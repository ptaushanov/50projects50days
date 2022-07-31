const buttons = document.querySelectorAll(".ripple")

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const { layerX, layerY, target: { innerText } } = event
        event.target.innerHTML = `
        ${innerText}
        <span class="circle" style="top: ${layerY}px; left: ${layerX}px;"></span>
    `
    })
})