function formatCurrency(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

document.addEventListener("DOMContentLoaded", function() {
    // Hiển thị thông tin giỏ hàng và khách hàng từ localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const deliveryFee = 30000; // Ví dụ phí giao hàng cố định
    
    // Hiển thị thông tin khách hàng và giỏ hàng (Có thể bỏ qua nếu không cần)
    document.getElementById("customer-name").textContent = user.name;
    document.getElementById("address").textContent = user.address;

    const orderItemsContainer = document.querySelector('.order-items');
    let totalAmount = 0;

    cart.forEach(product => {
        const item = document.createElement('div');
        item.className = 'item';
        item.innerHTML = `
            <p>${product.name} - ${formatCurrency(product.price)}đ x ${product.quantity}</p>
        `;
        orderItemsContainer.appendChild(item);
        totalAmount += product.price * product.quantity;
    });

    document.getElementById("delivery-fee").textContent = `${formatCurrency(deliveryFee)}đ`;
    document.getElementById("total-amount").textContent = `${formatCurrency(totalAmount + deliveryFee)}đ`;

    // Xử lý sự kiện khi nhấn nút "Xác nhận thanh toán"
    document.getElementById('confirm-payment').addEventListener('click', function() {
        // Lưu thông tin đơn hàng vào localStorage
        localStorage.setItem('order', JSON.stringify({
            user: user,
            cart: cart,
            deliveryFee: deliveryFee,
            totalAmount: totalAmount + deliveryFee,
            paymentMethod: document.querySelector('input[name="payment-method"]:checked').value
        }));

        // Chuyển hướng đến trang hóa đơn
        window.location.href = 'invoice.html';
    });
});