function displayImageList(productIndex) {
  let productList = JSON.parse(localStorage.getItem("products"));

  let productName = document.getElementById("productName");
  document.getElementById("productIndex").value = productIndex;
  productName.innerText = productList[productIndex].name;
  let images = document.getElementById("images");
  images.innerHTML = "";
  if (productList[productIndex].images !== undefined) {
    productList[productIndex].images.forEach((name, imageIndex) => {
      let tr = document.createElement("tr");
      let imageTd = document.createElement("td");

      //images
      let imgElement = document.createElement("img");
      imgElement.src = name;
      imgElement.style.width = "80px";
      imgElement.style.height = "80px";
      imageTd.appendChild(imgElement);

      //action
      let actionTd = document.createElement("td");
      actionTd.innerHTML = `
      <button onclick="deleteImage(${productIndex},${imageIndex})">Delete</button>
    `;

      tr.appendChild(imageTd);
      tr.appendChild(actionTd);
      images.appendChild(tr);
    });
  }
}
