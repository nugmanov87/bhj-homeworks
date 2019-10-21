"use strict";
const menuLink = document.getElementsByClassName("menu__link");
const menuSub = document.querySelectorAll("ul.menu_sub");

for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].onclick = function() {
    if (menuLink[i].nextElementSibling == menuSub[0]) {
      menuSub[0].className = "menu menu_sub menu_active";
      if ((menuSub[1].className = "menu menu_sub menu_active")) {
        menuSub[1].className = "menu menu_sub";
      }
      return false;
    }

    if (menuLink[i].nextElementSibling == menuSub[1]) {
      menuSub[1].className = "menu menu_sub menu_active";
      if ((menuSub[0].className = "menu menu_sub menu_active")) {
        menuSub[0].className = "menu menu_sub";
      }
      return false;
    }
  };
}
