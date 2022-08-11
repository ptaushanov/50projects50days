const resultEl = document.getElementById("result")
const lengthEl = document.getElementById("length")
const uppercaseEl = document.getElementById("uppercase")
const lowercaseEl = document.getElementById("lowercase")
const numbersEl = document.getElementById("numbers")
const symbolsEl = document.getElementById("symbols")
const generateEl = document.getElementById("generate")
const clipboardEl = document.getElementById("clipboard")

const symbols = '!@#$%^&*(){}[]=<>/,.'

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generateEl.addEventListener("click", () => {
    const length = +lengthEl.value
    const lower = lowercaseEl.checked
    const upper = uppercaseEl.checked
    const number = numbersEl.checked
    const symbol = symbolsEl.checked

    const generateOptions = { lower, upper, number, symbol }
    resultEl.innerText = generatePassword(generateOptions, length)
})

clipboardEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea")
    const password = resultEl.innerText

    if (!password) { return }
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
    alert("Password copied to clipboard!")
})

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword(generateOptions, length) {
    let generatedPassword = ''

    const selectionOfTypes = Object.entries(generateOptions)
        .reduce((acc, [type, value]) => {
            if (value) { acc.push(type) }
            return acc
        }, [])

    const selectionLength = selectionOfTypes.length
    if (selectionLength === 0) { return '' }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * selectionLength)
        const randomSelection = selectionOfTypes[randomIndex]

        generatedPassword += randomFunc[randomSelection]();
    }

    return generatedPassword
}