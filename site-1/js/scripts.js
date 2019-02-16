var open = document.querySelector(".btn-contacts");
var popup = document.querySelector(".modal-window");
var close = popup.querySelector(".modal-window-close");
var focus = popup.querySelector("[name=name]");

open.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-window-show");
  focus.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-window-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-window-show")) {
      popup.classList.remove("modal-window-show");
    }
  }
});
//for yandex 
