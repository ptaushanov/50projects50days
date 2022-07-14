document.querySelector(".btn")
    .addEventListener("click", () => {
        document.querySelector(".search").classList.toggle("active")
        document.querySelector("input").focus()
    })