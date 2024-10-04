function deleteImage(productIndex, imageIndex) {
  let productList = JSON.parse(localStorage.getItem("products"));
  productList[productIndex].images.splice(imageIndex, 1);
  localStorage.setItem("products", JSON.stringify(productList));
  displayImageList(productIndex);
}
