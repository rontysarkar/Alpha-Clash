const audio = new Audio();
let inGame = false;


audio.src = "../audio/success.mp3";
audio.play();
console.log(audio)
function keyEvent(event) {
  const playerPressed = event.key.toLowerCase();
  if(inGame == false) return;
  if (playerPressed === "escape") {
    gameOver();
  }
  console.log(playerPressed);

  const currentAlphabet = document.getElementById("current-alphabet");
  const expected = currentAlphabet.innerText.toLowerCase();
  if (expected === playerPressed) {
    
    audio.src = "../audio/success.mp3";
    audio.play();
    const value = getTextElementById("current-score");
    const newScore = value + 1;
    setTextElementById("current-score", newScore);

    removeBackgroundColor(playerPressed);
    contunueGame();
  } else {
    audio.src = "../audio/wrong.mp3";
    audio.play();
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
  inGame = true;
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
  inGame = false;
}
