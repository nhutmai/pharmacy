function search() {
  let searchTxt = document
    .getElementById("searchText")
    .value.toLowerCase()
    .trim();
  let productList = JSON.parse(localStorage.getItem("products")) || [];

  let filteredProduct = productList.filter((product) =>
    product.name.toLowerCase().includes(searchTxt)
  );
  displayProductImage(filteredProduct);
}
