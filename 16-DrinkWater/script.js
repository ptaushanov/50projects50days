const smallCups = document.querySelectorAll(".cup.cup-small")
const letters = document.getElementById("letters")
const percentage = document.getElementById("percentage")
const remained = document.getElementById("remained")

updateBigCup()

smallCups.forEach((cup, index) => {
    cup.addEventListener("click", () => highlightCups(index))
})

function highlightCups(clickedIndex) {
    const clickedCup = smallCups[clickedIndex]
    const nextCup = smallCups[clickedIndex + 1]
    const cupFull = clickedCup.classList.contains("full")
    const nextCupEmpty = !nextCup || !nextCup.classList.contains("full")

    if (cupFull && nextCupEmpty) { clickedIndex-- }

    smallCups.forEach((cup, index) => {
        if (index > clickedIndex) { cup.classList.remove("full") }
        else { cup.classList.add("full") }
    })

    updateBigCup()
}

function updateBigCup() {
    const totalCups = smallCups.length;
    let fullCups = 0;

    smallCups.forEach(cup => {
        if (cup.classList.contains("full")) { fullCups++ }
    })

    percentage.style.height = `${Math.round(fullCups / totalCups * 330)}px`
    percentage.innerText = `${Math.round(fullCups / totalCups * 100)}%`
    letters.innerText = `${250 * (totalCups - fullCups) / 1000}L`
}