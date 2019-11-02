const menu = document.querySelectorAll(".interest__check");
const firstMenu = menu.item(0);
const secondMenu = menu.item(3);

firstMenu.addEventListener("click", e => {
  if (firstMenu.checked) {
    menu.item(1).checked = true;
    menu.item(2).checked = true;
  } else {
    menu.item(1).checked = false;
    menu.item(2).checked = false;
  }
});
secondMenu.addEventListener("click", e => {
  if (secondMenu.checked) {
    menu.item(4).checked = true;
    menu.item(5).checked = true;
  } else {
    menu.item(4).checked = false;
    menu.item(5).checked = false;
  }
});
