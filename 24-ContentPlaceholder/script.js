const header = document.getElementById("header")
const title = document.getElementById("title")
const excerpt = document.getElementById("excerpt")
const profileImg = document.getElementById("profile_img")
const name = document.getElementById("name")
const date = document.getElementById("date")

const animatedBgs = document.querySelectorAll(".animated-bg")
const animatedBgTexts = document.querySelectorAll(".animated-bg-text")

function getData() {
    header.innerHTML = `<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60">`
    title.innerHTML = "Lorem ipsum dolor sit amet."
    excerpt.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tenetur!"
    profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/41.jpg">`
    name.innerHTML = "John Doe"
    date.innerHTML = "Aug 03, 2022"

    animatedBgs.forEach(bg => bg.classList.remove("animated-bg"))
    animatedBgTexts.forEach(bgt => bgt.classList.remove("animated-bg-text"))
}

setTimeout(getData, 2500);