"use strict";

const countDown = function() {
  const timer = document.getElementById("timer");
  if (timer.textContent == 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(interval);
  } else {
    timer.textContent--;
  }
};

let interval = setInterval(countDown, 1000);
