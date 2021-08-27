"use strict";

let currentModal = "";

const body = document.querySelector("body");
const html = document.querySelector("html");
const openModal = document.querySelectorAll(".open-modal");
const closeModal = document.querySelectorAll(".close-modal");
const overlay = document.querySelector(".overlay");

function closeFunction() {
  document.querySelector(`.modal-${currentModal}`).classList.add("hidden");
  body.style.overflowY = "inherit";
  html.style.overflowY = "inherit";
  overlay.classList.add("hidden");
  currentModal = "";
}

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", function () {
    let classes = openModal[i].classList;
    currentModal = classes[1];
    document.querySelector(`.modal-${currentModal}`).classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
    body.style.overflowY = "hidden";
    html.style.overflowY = "hidden";
  });
}

for (let i = 0; i < closeModal.length; i++) {
  closeModal[i].addEventListener("click", function () {
    closeFunction();
  });
}

document
  .querySelector(".clickable-overlay")
  .addEventListener("click", function () {
    closeFunction();
  });

document.addEventListener("keydown", function (k) {
  if (currentModal != "" && k.key == "Escape") closeFunction();
});
