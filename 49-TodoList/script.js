const todosUl = document.getElementById("todos")
const form = document.getElementById("form")
const inputEl = document.getElementById("input")

loadTodos()

form.addEventListener("submit", (event) => {
    event.preventDefault()
    if (inputEl.value === '') return
    addTodo({ text: inputEl.value })
    saveTodos()
    inputEl.value = ''
})

function addTodo({ text, completed = false }) {
    const todo = document.createElement("li")
    todo.innerText = text

    if (completed) todo.classList.add("completed")

    todo.addEventListener("click", ({ target }) => toggleCompleted(target))
    todo.addEventListener("contextmenu", handleTodoDelete)

    todosUl.appendChild(todo)
}

function toggleCompleted(todo) {
    todo.classList.toggle("completed")
    saveTodos()
}

function handleTodoDelete(event) {
    const { target: todo } = event
    event.preventDefault()
    todo.remove()
    saveTodos()
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (Array.isArray(todos)) todos.forEach(addTodo)
}

function saveTodos() {
    const todosLi = document.querySelectorAll("#todos li")
    const todosText = []
    todosLi.forEach(todoLi => todosText.push({
        text: todoLi.innerText,
        completed: todoLi.classList.contains("completed")
    }))
    localStorage.setItem("todos", JSON.stringify(todosText))
}