const tabs = document.querySelectorAll("nav ul li")
const contents = document.querySelectorAll(".content")

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        setActiveTab(tab)
        setShownContent(index)
    })
})

function setActiveTab(tab) {
    tabs.forEach(tab => tab.classList.remove("active"))
    tab.classList.add("active")
}

function setShownContent(index) {
    contents.forEach(content => content.classList.remove("show"))
    contents[index].classList.add("show")
}