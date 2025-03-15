const spacematic = document.getElementById('spacematic');
const text = spacematic.textContent;

spacematic.textContent = '';

function createLetters() {
  for (let i = 0; i < text.length; i++) {
    const letter = document.createElement('span');
    letter.classList.add('letter');
    letter.textContent = text[i];

    if (text[i] === 'S' || text[i] === 'M') {
      letter.classList.add('lightblue');
    } else {
      letter.classList.add('black');
    }

    letter.style.animationDelay = `${i * 0.2}s`;
    spacematic.appendChild(letter);
  }
}

setTimeout(createLetters, 1000);
