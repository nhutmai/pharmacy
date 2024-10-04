function loadProductList(products = null) {
  if (products === null) {
    products = JSON.parse(localStorage.getItem("products")) || [];
  }

  let productListTbody = document.getElementById("productList");
  productListTbody.innerText = "";

  products.forEach((product) => {
    let productTr = document.createElement("tr");

    productTr.innerHTML = `<td> ${product.name}</td>
    <td>${product.price}</td>
    <td>${product.unit}</td>
    <td>${product.category}</td>
    <td>${product.detail}</td>
    <td>
      <button class='read-btn' onclick="readP('${product.id}')">Read</button>
      <button class='delete-btn' onclick="deleteP('${product.id}')">Delete</button>
      <button class='edit-btn' onclick="prepareUpdateProduct('${product.id}')">Edit</button>
    </td>`;

    productListTbody.appendChild(productTr);
  });
}
loadProductList();

//Search product by name
function search() {
  let searchTxt = document
    .getElementById("searchText")
    .value.toLowerCase()
    .trim();
  let products = JSON.parse(localStorage.getItem("products")) || [];
  const filteredProduct = products.filter((product) =>
    product.name.toLowerCase().includes(searchTxt)
  );
  loadProductList(filteredProduct);
}

// add product
function activeAddProduct() {
  const form = document.getElementById("addNewProduct");
  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";
  form.classList.add("show");
  document.body.classList.add("overplay");
}
function closeAddProduct() {
  const form = document.getElementById("addNewProduct");
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
  form.classList.remove("show");
}
function addNewProduct(event) {
  event.preventDefault();
  createProduct();
}
// ===============================

//edit product
function prepareUpdateProduct(productId) {
  activeEditProduct();
  const products = JSON.parse(localStorage.getItem("products")) || [];

  const product = products.find((product) => product.id === productId);

  if (product) {
    document.getElementById("e-productId").value = product.id;
    document.getElementById("e-productName").value = product.name;
    document.getElementById("e-productPrice").value = product.price;
    document.getElementById("e-productUnit").value = product.unit;
    document.getElementById("e-productCategory").value = product.category;
    document.getElementById("e-productDetail").value = product.detail;
  } else {
    alert("Product not found 1");
  }
}

function update(event) {
  event.preventDefault();
  updateProduct();
}

function activeEditProduct() {
  const form = document.getElementById("editProduct");
  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";
  form.classList.add("show");
  document.body.classList.add("overplay");
}

function closeEditProduct() {
  const form = document.getElementById("editProduct");
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
  form.classList.remove("show");
}
// ===============================

//read product
function readP(productId) {
  activeReadProduct();
  readProduct(productId);
}

function activeReadProduct() {
  const form = document.getElementById("readProduct");
  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";
  form.classList.add("show");
  document.body.classList.add("overplay");
}

function closeReadProduct() {
  const form = document.getElementById("readProduct");
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
  form.classList.remove("show");
}

//Delete a product
// Delete product function with confirm dialog
function deleteP(productId) {
  const confirmDeletion = confirm(
    "Are you sure you want to delete this product?"
  );

  if (confirmDeletion) {
    deleteProduct(productId);
  }
}
