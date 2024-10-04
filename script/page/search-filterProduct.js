// tìm kiếm và lọc sản phẩm dựa trên từ khóa
function searchProducts(searchTerm){
    //lấy product từ trong localstorage, nếu không có sẽ khởi tạo mảng rỗng
    const products = JSON.parse(localStorage.getItem('products')) || [];

    const filterProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

    displayProducts(filterProducts);
}

function formatCurrency(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function filterProducts(filterCriteria){
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const filterProducts = products.filter(product =>{
        const matchesCategory = !filterCriteria.category || product.category === filterCriteria.category;

        const matchesMinPrice = !filterCriteria || product.price >= filterCriteria.minPrice;

        const matchesMaxPrice = !filterCriteria || product.price <= filterCriteria.maxPrice;

        return matchesCategory && matchesMinPrice && matchesMaxPrice;
    });

    //hiển thị product đã lọc
    displayProducts(filterProducts);
}

function displayProducts(products){

    const productContainer = document.getElementById('productContainer-4');

    productContainer.innerHTML = '';

    products.forEach(product => {
        
        const productElement = document.createElement('div');
        productElement.className = 'product-card'
        productElement.innerHTML = `

         <img src = "${product.images[0]}" alt = "${product.name}">

        <h3>
            ${product.name}
        </h3>

        <p style="color: red;">
            ${formatCurrency(product.price)}đ/${product.unit}
        </p>


        <button onclick ="addToCart('${product.id}')">
            Add To Cart
        </button>
        `;
        //thêm element(phần tử) vào productContainer
        productContainer.appendChild(productElement)
    })
}

function displayProductsTop(products) {
    const productContainer = document.getElementById('productContainer');

    let j = 0;

    productContainer.innerHTML = '';

    // Giới hạn vòng lặp chỉ chạy từ phần tử thứ 1 đến thứ 5
    for (let i = 0; i < products.length && j < 5; i++) {
         
            const product = products[i];

            if(product.category === "top bán chạy")
                {
            const productElement = document.createElement('div');
            productElement.className = 'product-card';
            productElement.innerHTML = `

            <a href = "#" onclick="goToPage('/view/home/productDetail.html#')"><img src = "${product.images[0]}" alt = "${product.name}"></a>
            
            <h3>
                ${product.name}
            </h3>

            <p style="color: red;">
                ${formatCurrency(product.price)}đ/${product.unit}
            </p>



            <button onclick="addToCart('${product.id}')">
                Add To Cart
            </button>
            `;
            // Thêm phần tử vào productContainer
            productContainer.appendChild(productElement);
             j++;
         }
    }
}

function displayProductsSunny(products) {
    const productContainer = document.getElementById('productContainer-2');

    let j = 0;

    productContainer.innerHTML = '';

    // Giới hạn vòng lặp chỉ chạy từ phần tử thứ 1 đến thứ 5
    for (let i = 0; i < products.length && j < 5; i++) {
         
            const product = products[i];

            if(product.category === "Vi vu hè không sợ nắng")
                {
            const productElement = document.createElement('div');
            productElement.className = 'product-card';
            productElement.innerHTML = `

            <img src = "${product.images[0]}" alt = "${product.name}">

            <h3>
                ${product.name}
            </h3>

            <p style="color: red;">
                ${formatCurrency(product.price)}đ/${product.unit}
            </p>



            <button onclick="addToCart('${product.id}')">
                Add To Cart
            </button>
            `;
            // Thêm phần tử vào productContainer
            productContainer.appendChild(productElement);
             j++;
         }
    }
}

function displayProductsSale(products) {
    const productContainer = document.getElementById('productContainer-3');

    let j = 0;

    productContainer.innerHTML = '';

    // Giới hạn vòng lặp chỉ chạy từ phần tử thứ 1 đến thứ 5
    for (let i = 0; i < products.length && j < 10; i++) {
         
            const product = products[i];
            if(product.category === "sản phẩm nổi bật")
                {
            const productElement = document.createElement('div');
            productElement.className = 'product-card';
            productElement.innerHTML = `

            <img src = "${product.images[0]}" alt = "${product.name}">

            <h3>
                ${product.name}
            </h3>

            <p style="color: red;">
            ${formatCurrency(product.price)}đ/${product.unit}
            </p>



            <button onclick="addToCart('${product.id}')">
                Add To Cart
            </button>
            `;
            // Thêm phần tử vào productContainer
            productContainer.appendChild(productElement);
             j++;
         }
    }
}

function displayProductsDetail(products) {
    const productContainer = document.getElementById('product-image');
    // const productContainer1 = document.getElementById('product-detail');
    // const productContainer2 = document.getElementById('product-detail');


    productContainer.innerHTML = '';


    const product = products[0];

    const productElement = document.createElement('div');
    productElement.innerHTML = `
    <img src = "${product.images[0]}" alt = "${product.name}"><br>
    `

    productContainer.appendChild(productElement);


    const productContainer1 = document.getElementById('product-price');
    productContainer1.innerHTML = '';

    const productElement1 = document.createElement('div');
    productElement1.innerHTML = `
    <h1>${product.name}</h1>
    <span class="current-price">${formatCurrency(product.price)}đ/${product.unit}</span><br>
    <button class="add-to-cart" onclick="addToCart('${product.id}')">Add To Cart</button>
    `
    productContainer1.appendChild(productElement1);
}

function ProductsDetail(){
    const productContainer = document.getElementById('detail-product');
    productContainer.innerHTML = '';

    const productElement = document.createElement('div');
    productElement.innerHTML = `
    <h3>2. Công dụng (Chỉ định)</h3>
                    <p>
                        Panadol Extra chứa paracetamol là một chất hạ sốt, giảm đau và caffeine là một chất tăng cường tác dụng giảm đau của paracetamol. Panadol Extra có hiệu quả trong:<br><br>

                        Điều trị đau nhẹ đến vừa và hạ sốt bao gồm:<br><br>

                            &nbsp;&nbsp;&nbsp;&nbsp;- Đau đầu.<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;- Đau nửa đầu.<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;- Đau cơ.<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;- Đau bụng kinh.<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;- Đau họng.<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;- Đau cơ xương.<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;- Sốt và đau sau khi tiêm vacxin.<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;- Đau sau khi nhổ răng hoặc sau các thủ thuật nha khoa.<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;- Đau răng.<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;- Đau do viêm xương khớp.<br>
                    </p>
    <h3>3. Cách dùng - Liều dùng</h3>
    <p>
        &nbsp;&nbsp;&nbsp;&nbsp;- Người lớn (kể cả người cao tuổi) và trẻ em từ 12 tuổi trở lên. Chỉ dùng đường uống.<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- Nên dùng 500mg paracetamol/ 65mg caffeine đến 1000mg paracetamol/ 130mg caffeine (1 hoặc 2 viên) mỗi 4 đến 6 giờ nếu cần.<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- Liều tối đa hàng ngày: 4000mg/520mg (paracetamol/ caffeine).<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- Thời gian tối thiểu dùng liều lặp lại: 4 giờ.<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- Không dùng các thuốc khác có chứa paracetamol.<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- Không dùng quá liều chỉ định.<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- Trẻ em dưới 12 tuổi: không khuyến nghị dùng thuốc này cho trẻ em dưới 12 tuổi.<br>
    </p>
    `
    productContainer.appendChild(productElement);


    
}


