"use strict";
const modalMain = document.getElementById("modal_main");
modalMain.classList.add("modal_active");
const closeModal = document.getElementsByClassName("modal__close_times");

// смена кнопок
const changeButton1 = document.querySelector(".show-success");
const changeButton2 = document.getElementById("modal_success");
changeButton1.onclick = function() {
  changeButton2.classList.add("modal_active");
  modalMain.classList.remove("modal_active");
};

// крестик для первой кнопки
const firstCloseModalElement = closeModal.item(0);
firstCloseModalElement.onclick = function() {
  modalMain.classList.remove("modal_active");
};

// крестик для второй кнопки
const secondCloseModalElement = closeModal.item(1);
secondCloseModalElement.onclick = function() {
  modalMain.classList.remove("modal_active");
  changeButton2.classList.remove("modal_active");
};
