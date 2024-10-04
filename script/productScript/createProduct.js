var imgBase64data;

document
  .getElementById("c-productImage")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        imgBase64data = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  });

console.log(imgBase64data);
function createProduct() {
  const productName = document.getElementById("c-productName").value;
  const productPrice = document.getElementById("c-productPrice").value;
  const productCategory = document.getElementById("c-productCategory").value;
  const productUnit = document.getElementById("c-productUnit").value;
  const productDetail = document.getElementById("c-productDetail").value;
  //todo add the init image

  const productId = Date.now().toString();

  const newProduct = {
    id: productId,
    name: productName,
    price: productPrice,
    category: productCategory,
    unit: productUnit,
    detail: productDetail,
    images: [imgBase64data],
  };
  let products = JSON.parse(localStorage.getItem("products")) || [];

  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));
  alert("Product created successfully");
  closeAddProduct();
  clearInputData();
  loadProductList();
}

function clearInputData() {
  document.getElementById("c-productName").value = "";
  document.getElementById("c-productPrice").value = "";
  document.getElementById("c-productCategory").value = "";
  document.getElementById("c-productCategory").value = "";
  document.getElementById("c-productDetail").value = "";
}
