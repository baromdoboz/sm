const spacematic = document.getElementById("spacematic")
const text = spacematic.textContent

spacematic.textContent = ""

function createLetters() {
  // Töröljük a korábbi betűket
  spacematic.innerHTML = ""

  spacematic.style.animation = "none" // Az animáció újraindítása
  spacematic.offsetHeight // Force reflow (újraszámolás), hogy az animáció újrainduljon
  spacematic.style.animation = "" // Az animációs stílus újra alkalmazása

  // Létrehozzuk és animáljuk a betűket
  for (let i = 0; i < text.length; i++) {
    const letter = document.createElement("span")
    letter.classList.add("letter")
    letter.textContent = text[i]

    if (i === 0 || i === 5) {
      letter.classList.add("lightblue")
    }

    letter.style.animationDelay = `${i * 0.2}s`
    spacematic.appendChild(letter)
  }

  // Visszaállítjuk a div opacity-ját 1-re és újraindítjuk az animációt
  //  spacematic.style.opacity = 1;
  //  spacematic.style.animation = 'none'; // Az animáció újraindítása
  //  spacematic.offsetHeight; // Force reflow (újraszámolás), hogy az animáció újrainduljon
  //  spacematic.style.animation = ''; // Az animációs stílus újra alkalmazása
}

// A kattintás esemény figyelése, és a createLetters hívása minden kattintáskor
document.addEventListener("click", function () {
  //  spacematic.style.opacity = 1;
  /*
  spacematic.style.animation = 'none'; // Az animáció újraindítása
  spacematic.offsetHeight; // Force reflow (újraszámolás), hogy az animáció újrainduljon
  spacematic.style.animation = ''; // Az animációs stílus újra alkalmazása
*/
  // Visszaállítjuk az opacity-t, hogy újra látható legyen
  //  spacematic.style.opacity = 1;

  // Indítjuk az animációt
  //  setTimeout(createLetters, 1000)
  createLetters()
})

// A createLetters függvényt lefuttatjuk 1 másodperces késleltetéssel az oldal betöltődésekor
window.addEventListener("load", function () {
  setTimeout(createLetters, 1000) // 1000 ms = 1 másodperc késleltetés
})
