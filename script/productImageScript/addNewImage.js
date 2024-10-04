document
  .getElementById("imageUpload")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const productList = JSON.parse(localStorage.getItem("products"));
    let index = document.getElementById("productIndex").value;
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        imageData = e.target.result;
        if (productList[index].images !== undefined) {
          productList[index].images.push(imageData);
        } else {
          productList[index].images = [imageData];
        }

        localStorage.setItem("products", JSON.stringify(productList));
      };
      reader.readAsDataURL(file);

      alert("Image Added Successful");
      displayImageList(index);
      document.getElementById("imageUpload").value = "";
    }
  });
