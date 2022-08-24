const ratings = document.querySelectorAll(".rating")
const sendBtn = document.getElementById("send")
const panel = document.getElementById("panel")
const ratingsContainer = document.querySelector(".ratings-container")
let selectedRating = "Satisfied"

ratingsContainer.addEventListener("click", ({ target }) => {
    if (target.parentNode.classList.contains("rating")) {
        removeActive()
        target.parentNode.classList.add("active")
        selectedRating = target.nextElementSibling.innerText
    }
})

sendBtn.addEventListener("click", (event) => {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you!</strong>
    <br />
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeActive() {
    ratings.forEach(rating => rating.classList.remove("active"))
}