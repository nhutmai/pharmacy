document.addEventListener("DOMContentLoaded", function() {
    // Hiển thị thông tin khách hàng
    const user = JSON.parse(localStorage.getItem("user"));
    const customerNameElement = document.getElementById("customer-name");
    const addressElement = document.getElementById("address");

    if (user) {
        customerNameElement.textContent = `Tên: ${user.name}`;
    } 
    else {
        customerNameElement.textContent = "Thông tin khách hàng không có sẵn.";
    }

    function formatCurrency(amount) {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    // Cập nhật hiển thị giỏ hàng
    function updateCartDisplay() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const orderItemsContainer = document.querySelector('.order-items');
        orderItemsContainer.innerHTML = '';

        cart.forEach((product, index) => {
            const item = document.createElement('div');
            item.className = 'item';
            item.innerHTML = `
                <img src="${product.images}" alt="${product.name}">
                <p>${product.name}</p>
                <div class="price-quantity">
                    <span>${formatCurrency(product.price)}đ</span>
                    <div class="quantity">
                        <button class="update-quantity" data-index="${index}" data-delta="-1">-</button>
                        <input type="text" value="${product.quantity}" readonly>
                        <button class="update-quantity" data-index="${index}" data-delta="+1">+</button>
                    </div>
                </div>
                <button class="delete-button" data-index="${index}">Xóa</button>
            `;
            orderItemsContainer.appendChild(item);
            orderItemsContainer.appendChild(document.createElement('hr'));
        });

        const totalAmount = cart.reduce((sum, product) => sum + (product.price * product.quantity), 0);
        const deliveryFee = document.getElementById("delivery-fee");
        let deliveryFeeAmount = 0;
        if (selectedDeliveryOption === 'delivery') {
            deliveryFeeAmount = 30000;
            if (isFastDelivery) {
                deliveryFeeAmount += 20000;
            }
        }
        deliveryFee.textContent = `${deliveryFeeAmount}đ`;
        document.getElementById("total-amount").textContent = `${formatCurrency(totalAmount + deliveryFeeAmount)}đ`;
    }

    // Cập nhật số lượng sản phẩm
    function updateQuantity(index, delta) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart[index].quantity += delta;
        if (cart[index].quantity < 1) cart[index].quantity = 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }

    // Xóa sản phẩm khỏi giỏ hàng
    function removeFromCart(index) {
        let cart = JSON.parse(localStorage.getItem('cart'));cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }

    // Cập nhật lựa chọn giao hàng
    function updateDeliveryOption() {
        const deliveryDetails = document.getElementById("delivery-details");
        const deliveryRadio = document.getElementById("delivery");
        const pickupRadio = document.getElementById("pickup");

        deliveryDetails.style.display = deliveryRadio.checked ? "block" : "none";
        updateCartDisplay();
    }

    // Cập nhật phí giao hàng khi chọn giao hàng siêu nhanh
    function updateFastDelivery() {
        const fastDeliveryCheckbox = document.getElementById("fast-delivery");
        isFastDelivery = fastDeliveryCheckbox.checked;
        updateCartDisplay();
    }

    let isFastDelivery = false;
    let selectedDeliveryOption = 'delivery';

    document.getElementById("delivery").addEventListener('change', function() {
        selectedDeliveryOption = 'delivery';
        updateDeliveryOption();
    });

    document.getElementById("pickup").addEventListener('change', function() {
        selectedDeliveryOption = 'pickup';
        updateDeliveryOption();
    });

    document.getElementById("fast-delivery").addEventListener('change', updateFastDelivery);

    // Thêm sự kiện cho các nút trong giỏ hàng
    document.querySelector('.order-items').addEventListener('click', function(event) {
        if (event.target.classList.contains('update-quantity')) {
            const index = event.target.getAttribute('data-index');
            const delta = parseInt(event.target.getAttribute('data-delta'));
            updateQuantity(index, delta);
        }
        if (event.target.classList.contains('delete-button')) {
            const index = event.target.getAttribute('data-index');
            removeFromCart(index);
        }
    });

    // Hiển thị giỏ hàng khi trang được tải
    updateCartDisplay();

    // Xử lý sự kiện khi nhấn nút "Đặt Hàng"
    document.getElementById('place-order').addEventListener('click', function() {
        // Lưu thông tin giỏ hàng và khách hàng vào localStorage
        localStorage.setItem('cart', JSON.stringify(JSON.parse(localStorage.getItem('cart')))); // Lưu giỏ hàng
        localStorage.setItem('user', JSON.stringify({ name: document.getElementById('customer-name').textContent.replace('Tên: ', ''), address: document.querySelector('#address').textContent.replace('Địa chỉ: ', '') })); // Lưu thông tin khách hàng
        
        // Chuyển hướng đến trang thanh toán
        window.location.href = 'pay.html'; 
    });
});