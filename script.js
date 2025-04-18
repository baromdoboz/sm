const spacematic = document.getElementById("spacematic")
spacematic.textContent = ""

const text = "SpaceMatic"

function createLetters() {
  spacematic.innerHTML = ""

  spacematic.style.animation = "none"
  spacematic.offsetHeight
  spacematic.style.animation = ""

  for (let i = 0; i < text.length; i++) {
    const letter = document.createElement("span")
    letter.classList.add("letter")
    letter.textContent = text[i]

    if (i === 0 || i === 5) {
      letter.style.color = "#009eec"
    }

    letter.style.animationDelay = `${i * 0.15}s`
    spacematic.appendChild(letter)
  }
}

document.addEventListener("click", function () {
  createLetters()
})

window.addEventListener("load", function () {
  spacematic.style.opacity = "1"
  setTimeout(createLetters, 1000)
})
