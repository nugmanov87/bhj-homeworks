let activeTool = null;

document.addEventListener("click", e => {
  let tooltip = e.target.getAttribute("title");
  let position = e.target.dataset.position;

  if (!e.target.classList.contains("has-tooltip")) return false;

  if (activeTool !== null && activeTool.innerText === tooltip) {
    activeTool.remove();
    activeTool = null;
    e.preventDefault();
  } else if (activeTool !== null) {
    activeTool.remove();
  }

  let tooltipDiv = document.createElement("div");
  tooltipDiv.className = "tooltip";
  tooltipDiv.innerText = tooltip;
  document.body.insertBefore(tooltipDiv, e.target);
  tooltipDiv.classList.add("tooltip_active");

  let coords = e.target.getBoundingClientRect();
  let top = coords.top - tooltipDiv.offsetHeight - 5;
  let left = coords.left + (e.target.offsetWidth - tooltipDiv.offsetWidth) / 2;

  if (top < 0) top = coords.top + tooltipDiv.offsetHeight;
  if (left < 0) left = coords.left;

  tooltipDiv.style.top = top + "px";
  tooltipDiv.style.left = left + "px";

  activeTool = document.querySelector(".tooltip");
  e.preventDefault();
});
