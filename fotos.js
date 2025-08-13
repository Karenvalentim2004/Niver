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
