function updateProduct() {
  const productId = document.getElementById("e-productId").value;
  const productName = document.getElementById("e-productName").value;
  const productPrice = document.getElementById("e-productPrice").value;
  const productCategory = document.getElementById("e-productCategory").value;
  const productUnit = document.getElementById("e-productUnit").value;
  const productDetail = document.getElementById("e-productDetail").value;

  let products = JSON.parse(localStorage.getItem("products")) || [];

  const productIndex = products.findIndex(
    (product) => product.id === productId
  );

  if (productIndex !== -1) {
    products[productIndex].name = productName;
    products[productIndex].price = productPrice;
    products[productIndex].category = productCategory;
    products[productIndex].unit = productUnit;
    products[productIndex].detail = productDetail;

    localStorage.setItem("products", JSON.stringify(products));
    alert("product updated success");
    clearInputData();
    closeEditProduct();
    loadProductList();
  } else {
    alert("Product not found");
  }
}

function clearInputData() {
  document.getElementById("e-productName").value = "";
  document.getElementById("e-productPrice").value = "";
  document.getElementById("e-productCategory").value = "";
  document.getElementById("e-productUnit").value = "";
  document.getElementById("e-productDetail").value = "";
}
