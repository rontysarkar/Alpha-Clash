function hiddenElement(Element) {
  const element = document.getElementById(Element);
  element.classList.add("hidden");
}

function showElement(Element) {
  const element = document.getElementById(Element);
  element.classList.remove("hidden");
}

function setBackgrundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function removeBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getTextElementById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const value = parseInt(elementText);
  return value;
}

function setTextElementById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getElementTextById(elementId) {
  const currentAlphabet = document.getElementById(elementId);
  const currentText = currentAlphabet.innerText;
  removeBackgroundColor(currentText);
}

function getAlphaBet() {
  const alphaBetString = "abcdefghijklmnopqrsyuvwxyz";
  const alphaBet = alphaBetString.split("");
  //   console.log(alphaBet);

  const randomNumber = Math.random() * 25;
  const random = Math.round(randomNumber);
  //   console.log(random)

  const randomAlpha = alphaBet[random];
  return randomAlpha;
}
