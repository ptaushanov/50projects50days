document.querySelectorAll(".faq-toggle")
    .forEach(faq => faq.addEventListener("click", () => {
        faq.parentNode.classList.toggle("active")
    }))