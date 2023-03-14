"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

const openedModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closedModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openedModal);
}

btnCloseModal.addEventListener("click", closedModal);
overlay.addEventListener("click", closedModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains('hidden')) {
    console.log("Escape")
    closedModal();
  }
});
