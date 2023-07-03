let count = 0
let maxCounter = 15

const value = document.querySelector(".value")
const buttons = document.querySelectorAll(".button")

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList

        if (styles.contains("decrease") && count > 0) {
            count--
        } else (count <= 0)


        if (styles.contains("restart")) {
            count = 0;
        }
        if (styles.contains("increase") && count < maxCounter) {
            count++
        } else (count >= maxCounter)

        value.textContent = count
    })
})