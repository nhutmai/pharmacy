function displayProductImage(productList = null) {
  let imageTableTbody = document.getElementById("imageList");
  imageTableTbody.innerHTML = "";
  if (productList === null) {
    productList = JSON.parse(localStorage.getItem("products"));
  }

  productList.forEach((product, index) => {
    let tr = document.createElement("tr");

    //thêm id và name
    let idTd = document.createElement("td");
    idTd.innerText = index + 1;
    let nameTd = document.createElement("td");
    nameTd.innerHTML = product.name;
    tr.appendChild(idTd);
    tr.appendChild(nameTd);

    //td image and edit-btn
    let imagesTd = document.createElement("td");
    imagesTd.style.position = "relative";
    if (product.images !== undefined) {
      let imgElement = document.createElement("img");
      imgElement.src = product.images[0];
      imgElement.style.width = "80px";
      imgElement.style.height = "80px";
      imgElement.style.marginLeft = "5px";
      imgElement.id = product.images[0];
      imgElement.onclick = () => {
        viewImage(product.images[0]);
      };
      imagesTd.appendChild(imgElement);
    }

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.id = "editImage-btn";
    editBtn.onclick = () => {
      crudImage(index);
    };
    imagesTd.appendChild(editBtn);
    tr.appendChild(imagesTd);

    // thêm tr và tbody
    imageTableTbody.appendChild(tr);
  });
}
displayProductImage();

function crudImage(index) {
  displayImageList(index);
  let crudImageDiv = document.getElementById("crudImage");
  let overlay = document.getElementById("overlay");
  crudImageDiv.style.display = "block";
  overlay.style.display = "block";
  crudImageDiv.classList.add("crudShow");
}

function closeCrud() {
  let crudImageDiv = document.getElementById("crudImage");
  let overlay = document.getElementById("overlay");
  crudImageDiv.style.display = "none";
  overlay.style.display = "none";
  crudImageDiv.classList.remove("crudShow");
  displayProductImage();
}
