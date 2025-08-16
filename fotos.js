let currentSpread = 0;
const spreads = document.querySelectorAll('.spread');

function showSpread(index) {
  spreads.forEach((spread, i) => {
    if (i <= index) {
      spread.classList.add('flipped');
    } else {
      spread.classList.remove('flipped');
    }
  });
}

function nextPage() {
  if (currentSpread < spreads.length - 1) {
    currentSpread++;
    showSpread(currentSpread);
  }
}

function prevPage() {
  if (currentSpread > 0) {
    currentSpread--;
    showSpread(currentSpread);
  }
}

showSpread(currentSpread);



    const floquinhos = document.querySelector('.floquinhos');

    for (let i = 0; i < 20; i++) {
        const el = document.createElement('div');
        el.textContent = ['💖', '✨', '💫', '🌟', '🥳', '🎉'][Math.floor(Math.random() * 4)];
        el.style.left = `${Math.random() * 100}vw`;
        el.style.fontSize = `${Math.random() * 15 + 10}px`;
        el.style.animationDuration = `${5 + Math.random() * 5}s`;
        floquinhos.appendChild(el);
    }



