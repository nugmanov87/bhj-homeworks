let activeTool;

document.addEventListener("click", e => {
  let tooltip = e.target.getAttribute("title");

  if (!e.target.classList.contains("has-tooltip")) return false;

  if (activeTool) {
    let hintText = activeTool.innerText;
    activeTool.remove();
    activeTool = null;

    if (hintText === e.target.title) return;
  }

  let tooltipDiv = document.createElement("div");
  tooltipDiv.className = "tooltip";
  tooltipDiv.innerText = tooltip;
  document.body.append(tooltipDiv);
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
