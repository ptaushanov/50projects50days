const button = document.getElementById("button")
const toasts = document.getElementById("toasts")

const messages = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four",
]

const types = ["info", "warning", "success", "error"]

button.addEventListener("click", () => createNotification())

const createNotification = (message = null, type = null) => {
    const toast = document.createElement("div")
    toast.classList.add("toast")
    toast.classList.add(type ?? getRandomType())
    toast.innerText = message ?? getRandomMessage()

    setTimeout(() => { toast.remove() }, 5000)
    toasts.appendChild(toast)
}

const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length)
    return messages[randomIndex]
}

const getRandomType = () => {
    const randomIndex = Math.floor(Math.random() * types.length)
    return types[randomIndex]
}