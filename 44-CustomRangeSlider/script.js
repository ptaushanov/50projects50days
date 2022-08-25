const range = document.getElementById("range")

range.addEventListener("input", ({ target }) => {
    const { value, nextElementSibling: label, max, min } = target

    const rangeWidth = parseInt(
        getComputedStyle(target)
            .getPropertyValue("width")
    )

    const labelWidth = parseInt(
        getComputedStyle(label)
            .getPropertyValue("width")
    )

    console.log(labelWidth)

    const left = value * (rangeWidth / max)
        - labelWidth / 2 + scale(value, min, max, 12, -12)

    label.style.left = `${left}px`
    label.innerText = value
})

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}