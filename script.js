"use strict";

let currentModal = "";
const openModal = document.querySelectorAll(".open-modal");
const closeModal = document.querySelectorAll(".close-modal");
const overlay = document.querySelector(".overlay");

function closeFunction() {
  document.querySelector(`.modal-${currentModal}`).classList.add("hidden");
  overlay.classList.add("hidden");
  document.querySelector("body").style.overflowY = "inherit";
  document.querySelector("html").style.overflowY = "inherit";
  currentModal = "";
}

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", function () {
    let classes = openModal[i].classList;
    currentModal = classes[1];
    document.querySelector(`.modal-${currentModal}`).classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("html").style.overflow = "hidden";
  });
}

for (let i = 0; i < closeModal.length; i++) {
  closeModal[i].addEventListener("click", function () {
    closeFunction();
  });
}

overlay.addEventListener("click", function () {
  closeFunction();
});

document.addEventListener("keydown", function (k) {
  if (currentModal != "" && k.key == "Escape") closeFunction();
});
