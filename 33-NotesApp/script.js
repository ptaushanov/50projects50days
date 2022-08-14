const addBtn = document.getElementById("add")

createNotesFromLS()
addBtn.addEventListener("click", ({ target: { value } }) => {
    createNewNote(value)
})

function createNewNote(text = '') {
    const note = document.createElement("div")
    note.classList.add("note")

    note.innerHTML = `
    <div class="tools">
        <button class="edit">
            <i class="fas fa-edit"></i>
        </button>
        <button class="delete">
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>
    <div class="main ${text ? '' : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ''}"></textarea>
    `

    const editBtn = note.querySelector(".edit")
    const deleteBtn = note.querySelector(".delete")
    const main = note.querySelector(".main")
    const textArea = note.querySelector("textarea")

    textArea.value = text
    main.innerHTML = marked.parse(text)

    deleteBtn.addEventListener("click", () => {
        note.remove()
        updateLS()
    })
    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden")
        textArea.classList.toggle("hidden")
    })

    textArea.addEventListener("input", ({ target: { value } }) => {
        main.innerHTML = marked.parse(value)
    })

    textArea.addEventListener("blur", updateLS)
    document.body.appendChild(note)
}

function updateLS() {
    const textAreas = document.querySelectorAll("textarea")
    const notes = []

    textAreas.forEach(textArea => notes.push(textArea.value))
    localStorage.setItem("notes", JSON.stringify(notes))
}

function createNotesFromLS() {
    const notes = localStorage.getItem("notes")
    if (!notes) return

    JSON.parse(notes)
        .map(note => createNewNote(note))
}