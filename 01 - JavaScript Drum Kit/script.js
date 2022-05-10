function play(e) {
  let key = 0;
  if (this.getAttribute) {
    key = this.getAttribute("data-key");
  } else {
    key = e.keyCode;
  }
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  const button = document.querySelector(`div[data-key="${key}"]`);
  if (!audio) return;
  button.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

const findButtons = function name() {
  const buttons = Array.from(document.querySelectorAll(".button"));
  buttons.forEach((buton) => {
    buton.addEventListener("click", play);
    buton.addEventListener("transitionend", removeTransition);
  });
  window.addEventListener("keydown", play);
};

window.addEventListener("load", findButtons);
