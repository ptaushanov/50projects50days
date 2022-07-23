const textArea = document.getElementById("textarea")
const tagsContainer = document.getElementById("tags")

textArea.focus()

textArea.addEventListener("keyup", ({ target: { value }, key }) => {
    if (key === "Enter") { chooseTag(30); return; }

    tagsContainer.innerHTML = value
        .split(',')
        .filter(tagText => tagText.trim() !== '')
        .map(tagText => (
            `<div class="tag">${tagText.trim()}</div>`
        ))
        .join('\n')
})

function chooseTag(times) {
    textArea.value = ''
    const tags = document.querySelectorAll(".tag")

    for (let i = 1; i <= times; i++) {
        setTimeout(highlightRandomTag, 100 * i, tags)
    }
}

function highlightRandomTag(tags) {
    const randIdx = Math.floor(Math.random() * tags.length)

    tags.forEach(tag => {
        tag.classList.remove("highlight")
    })

    tags[randIdx].classList.add("highlight")
}