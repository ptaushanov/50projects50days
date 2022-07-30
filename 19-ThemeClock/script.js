const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")

const timeEl = document.querySelector(".time")
const dateEl = document.querySelector(".date")

const toggle = document.querySelector(".toggle")

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

toggle.addEventListener("click", (event) => {
    const html = document.querySelector("html")
    const hasDark = html.classList.contains("dark")
    html.classList.toggle("dark")
    event.target.innerText = hasDark ? "Dark mode" : "Light mode"
})

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    timeEl.innerText = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} 
    <span class="circle">${date}</span>
    `

    hourEl.style.transform = `translate(-50%, -100%) rotate(${hoursForClock / 12 * 360}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${minutes / 60 * 360}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${seconds / 60 * 360}deg)`
}

setInterval(setTime, 1000);