const sliderContainer = document.querySelector(".slider-container")
const slideRight = document.querySelector(".right-slide")
const slideLeft = document.querySelector(".left-slide")
const upButton = document.querySelector(".up-button")
const downButton = document.querySelector(".down-button")
const slidesLength = slideRight.querySelectorAll("div").length


let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener("click", () => changeSlide(1))
downButton.addEventListener("click", () => changeSlide(-1))

function changeSlide(index) {
    const sliderHeight = sliderContainer.clientHeight
    activeSlideIndex = (slidesLength + activeSlideIndex + index) % slidesLength

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}