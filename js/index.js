const buttons = document.querySelectorAll("button");
let pElement = document.querySelector("p");
let letters = [];

document.addEventListener("keypress", function (event) {
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].innerHTML.toLowerCase() == event.key) {
      buttons[i].classList.add("keydown");
      pElement.innerHTML += event.key;
    } else {
    }
  }
});
document.addEventListener("keyup", function (event) {
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].innerHTML.toLowerCase() == event.key) {
      buttons[i].classList.remove("keydown");
    } else {
    }
  }
});
