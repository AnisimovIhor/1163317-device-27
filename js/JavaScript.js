var button = document.querySelector(".button-about");
var popup = document.querySelector(".pop-up-section");
var close = document.querySelector(".pop-up-close");

button.addEventListener("click" ,function (evt) {
  evt.preventDefault();
  popup.classList.add("pop-up-show");
});


close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("pop-up-show");
});

//
//
// element.classList.add("pop-up-hidden");
