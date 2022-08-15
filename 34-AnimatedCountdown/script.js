const nums = document.querySelectorAll(".nums span")
const counter = document.querySelector(".counter")
const finalMessage = document.querySelector(".final")
const replay = document.getElementById("replay")

runAnimation()
replay.addEventListener("click", resetDom)

function resetDom() {
    counter.classList.remove("hide")
    finalMessage.classList.remove("show")
    nums.forEach(num => num.classList.value = '')
    nums[0].classList.add("in")
}

function runAnimation() {
    const nextToLast = nums.length - 1

    nums.forEach((num, index) => {
        num.addEventListener("animationend", (event) => {
            if (event.animationName === "goIn" && index != nextToLast) {
                num.classList.remove("in")
                num.classList.add("out")
            }
            else if (event.animationName === "goOut" && num.nextElementSibling) {
                num.nextElementSibling.classList.add("in")
            }
            else {
                counter.classList.add("hide")
                finalMessage.classList.add("show")
            }
        })
    })
}
