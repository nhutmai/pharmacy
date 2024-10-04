function formatCurrency(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

document.addEventListener("DOMContentLoaded", function() {
    // Lấy thông tin đơn hàng từ localStorage
    const order = JSON.parse(localStorage.getItem('order'));

    if (order) {
        document.getElementById("customer-name").textContent = order.user.name;
        document.getElementById("address").textContent = order.user.address;
        document.getElementById("delivery-fee").textContent = `${formatCurrency(order.deliveryFee)}đ`;
        document.getElementById("total-amount").textContent = `${formatCurrency(order.totalAmount)}đ`;
        document.getElementById("payment-method").textContent = order.paymentMethod === 'cod' ? 'Thanh toán khi nhận hàng' : 'Chuyển khoản ngân hàng';

        const orderItemsContainer = document.querySelector('.order-items');
        order.cart.forEach(product => {
            const item = document.createElement('div');
            item.className = 'item';
            item.innerHTML = `
                <p>${product.name} - ${formatCurrency(product.price)}đ x ${product.quantity}</p>
            `;
            orderItemsContainer.appendChild(item);
        });

        // Xóa dữ liệu đơn hàng từ localStorage sau khi đã hiển thị
        localStorage.removeItem('order');
    }
});

function printInvoice() {
    window.print();
}