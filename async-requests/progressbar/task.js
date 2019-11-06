let progress = document.getElementById("progress");
let form = document.getElementById("form");

function upload(file) {
  let xhr = new XMLHttpRequest();
  xhr.upload.onprogress = function(e) {
    progress.setAttribute("max", e.total);
    progress.value = e.loaded;
  };

  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
  xhr.send(file);
}

form.addEventListener("submit", function(e) {
  let input = form.elements.file;
  let file = input.files[0];
  if (file) {
    upload(file);
  }
  e.preventDefault();
});
