function keyEvent(event) {
  const playerPressed = event.key.toLowerCase();
  if (playerPressed === "escape") {
    gameOver();
  }
  console.log(playerPressed);

  const currentAlphabet = document.getElementById("current-alphabet");
  const expected = currentAlphabet.innerText.toLowerCase();
  if (expected === playerPressed) {
    const value = getTextElementById("current-score");
    const newScore = value + 1;
    setTextElementById("current-score", newScore);

    removeBackgroundColor(playerPressed);
    contunueGame();
  } else {
    const value = getTextElementById("current-life");
    const newLife = value - 1;
    setTextElementById("current-life", newLife);
    if (newLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener("keyup", keyEvent);

//  game play

function contunueGame() {
  const alphabet = getAlphaBet();

  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;

  setBackgrundColor(alphabet);
}

function play() {
  hiddenElement("home-section");
  hiddenElement("final-score");
  showElement("playground-section");

  setTextElementById("current-life", 5);
  setTextElementById("current-score", 0);

  contunueGame();
}

function gameOver() {
  hiddenElement("playground-section");
  showElement("final-score");
  getElementTextById("current-alphabet");

  const lastScoreElement = document.getElementById("current-score");
  const lastScore = lastScoreElement.innerText;
  setTextElementById("last-score", lastScore);
}
