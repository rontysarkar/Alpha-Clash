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
