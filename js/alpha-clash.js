function keyEvent(event) {
  const playerPressed = event.key;
  const currentAlphabet = document.getElementById("current-alphabet");
  const expected = currentAlphabet.innerText.toLowerCase();
  if(expected === playerPressed){
    console.log('you get a point');
  }
  else{
    console.log('losss life')
  }
}

document.addEventListener("keyup", keyEvent);

// contune game

function contunueGame() {
  const alphabet = getAlphaBet();
  console.log("Random Alphabet :", alphabet);

  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;

  setBackgrundColor(alphabet);
}

function play() {
  hiddenElement("home-section");
  showElement("playground-section");
  contunueGame();
}
