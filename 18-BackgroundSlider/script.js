const leftArrow = document.getElementById("left")
const rightArrow = document.getElementById("right")
const slides = document.querySelectorAll(".slide")

let currentSlide = 0;
const slidesCount = slides.length;

const loadPreviousSlide = () => showSlide(-1)
const loadNextSlide = () => showSlide(+1)

setBgToBody()
leftArrow.addEventListener("click", loadPreviousSlide);
rightArrow.addEventListener("click", loadNextSlide);

function showSlide(index) {
    currentSlide = (slidesCount + currentSlide + index) % slidesCount
    slides.forEach(slide => slide.classList.remove("active"))
    slides[currentSlide].classList.add("active")

    setBgToBody()
}

function setBgToBody() {
    document.body.style.backgroundImage =
        slides[currentSlide].style.backgroundImage
}