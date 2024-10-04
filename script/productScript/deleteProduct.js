function deleteProduct(productId) {
  let products = JSON.parse(localStorage.getItem("products")) || [];

  products = products.filter((product) => product.id !== productId);

  localStorage.setItem("products", JSON.stringify(products));

  alert("Product deleted success");
  loadProductList();
}
