function viewImage(element) {
  let viewImageDiv = document.getElementById("viewImage-container");
  let image = document.getElementById("viewImage");
  let overlay = document.getElementById("overlay");
  image.src = element;
  overlay.style.display = "block";
  viewImageDiv.classList.add("show");
  let x = document.getElementById("x"); //nút thoát
  x.style.display = "block";
}

function closeViewImage() {
  let overlay = document.getElementById("overlay");
  let viewImageDiv = document.getElementById("viewImage-container");
  let x = document.getElementById("x"); //nút thoát
  x.style.display = "none";
  viewImageDiv.classList.remove("show");
  overlay.style.display = "none";
}
