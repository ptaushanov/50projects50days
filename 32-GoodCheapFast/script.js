const toggles = document.querySelectorAll(".toggle")
const good = document.getElementById("good")
const cheap = document.getElementById("cheap")
const fast = document.getElementById("fast")

toggles.forEach(toggle => {
    toggle.addEventListener("change", doTheTrick)
})


function doTheTrick(event) {
    const theClickedOne = event.target

    if (good.checked && cheap.checked && fast.checked) {
        if (good === theClickedOne) { fast.checked = false }
        else if (cheap === theClickedOne) { good.checked = false }
        if (fast === theClickedOne) { cheap.checked = false }
    }
}