const fill = document.querySelector(".fill")
const empties = document.querySelectorAll(".empty")

fill.addEventListener("dragstart", handleDragStart)
fill.addEventListener("dragend", handleDragEnd)

for (const empty of empties) {
    empty.addEventListener("dragover", handleDragOver)
    empty.addEventListener("dragenter", handleDragEnter)
    empty.addEventListener("dragleave", handleDragLeave)
    empty.addEventListener("drop", handleDragDrop)
}

function handleDragStart() {
    this.classList.add("hold")
    setTimeout(() => this.className = "", 0)
}

function handleDragEnd() {
    this.classList.add("fill")
}

function handleDragOver(event) {
    event.preventDefault()
}

function handleDragEnter(event) {
    event.preventDefault()
    this.classList.add("hovered")
}

function handleDragLeave() {
    this.classList.remove("hovered")
}

function handleDragDrop() {
    this.className = "empty"
    this.append(fill)
}