const buttons = document.querySelectorAll("button");
let pElement = document.querySelector("p");
let letters = [];

function keyPush() {
  pElement.innerHTML += event.key;
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
document.addEventListener("keypress", keyPush);
document.addEventListener("keyup", keyLeave);
