function readProduct(productId) {
  const products = JSON.parse(localStorage.getItem("products")) || [];

  const product = products.find((product) => product.id === productId);

  if (product) {
    console.log(product);
    document.getElementById("r-productName").value = product.name;
    document.getElementById("r-productPrice").value = product.price;
    document.getElementById("r-productCategory").value = product.category;
    document.getElementById("r-productUnit").value = product.unit;
    document.getElementById("r-productDetail").value = product.detail;
  } else {
    alert("product not found");
  }
}
