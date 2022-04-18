const buttons = document.querySelectorAll("button");
let pElement = document.querySelector("p");
let letters = [];

function keyPush(event) {
  if (event.key == "Enter") {
    pElement.innerHTML += "<br>";
  } else {
    pElement.innerHTML += event.key;
  }
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].innerHTML.toLowerCase() == event.key) {
      buttons[i].classList.add("keydown");
    } else {
    }
  }
}
function keyLeave(event) {
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].innerHTML.toLowerCase() == event.key) {
      buttons[i].classList.remove("keydown");
    } else {
    }
  }
}
function keyRemove(event) {
  if (event.key == "Backspace") {
    pElement.textContent = pElement.textContent.slice(0, -1);
  } else {
  }
}
document.addEventListener("keypress", keyPush);
document.addEventListener("keydown", keyRemove);
document.addEventListener("keyup", keyLeave);
