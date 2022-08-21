const codes = document.querySelectorAll(".code")

codes.forEach((code, index) => {
    code.addEventListener("keyup", ({ keyCode, key }) => {
        // Backspace logic
        if (keyCode === 8 && code.previousElementSibling) {
            codes[index - 1].focus()
            return
        }

        // [0-9] key logic
        if (keyCode < 48 || keyCode > 57) return
        code.value = key
        if (!code.nextElementSibling) return
        codes[index + 1].focus()
    })
})