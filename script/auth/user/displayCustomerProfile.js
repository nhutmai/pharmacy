document.addEventListener("DOMContentLoaded", function() {
    // Lấy thông tin người dùng từ localStorage
    const user = JSON.parse(localStorage.getItem("user"));

    // Nếu có thông tin người dùng, hiển thị trên trang
    if (user) {
        document.getElementById("customer-name").textContent = user.name || "Chưa cập nhật";
        document.getElementById("customer-email").textContent = user.email || "Chưa cập nhật";
        document.getElementById("customer-phone").textContent = user.phone || "Chưa cập nhật";
        document.getElementById("customer-address").textContent = user.address || "Chưa cập nhật";

        // Điền thông tin hiện tại của người dùng vào biểu mẫu cập nhật
        document.getElementById("name").value = user.name || "";
        document.getElementById("email").value = user.email || ""; // Email không thay đổi
        document.getElementById("phone").value = user.phone || "";
        document.getElementById("address").value = user.address || "";
    } else {
        console.error("Không tìm thấy thông tin người dùng trong localStorage.");
    }

    document.getElementById("update-info-button").addEventListener("click", function() {
        document.getElementById("update-profile-form").style.display = "block"; // Hiển thị biểu mẫu cập nhật
    });

    // Xử lý sự kiện khi biểu mẫu cập nhật được gửi
    document.getElementById("update-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn trang tải lại khi gửi biểu mẫu

        // Cập nhật thông tin người dùng trong localStorage
        const updatedUser = {
            name: document.getElementById("name").value.trim(),
            email: user.email, // Không thay đổi email
            phone: document.getElementById("phone").value.trim(),
            address: document.getElementById("address").value.trim()
        };

        localStorage.setItem("user", JSON.stringify(updatedUser));

        // Cập nhật thông tin hiển thị trên trang
        document.getElementById("customer-name").textContent = updatedUser.name;
        document.getElementById("customer-email").textContent = updatedUser.email;
        document.getElementById("customer-phone").textContent = updatedUser.phone;
        document.getElementById("customer-address").textContent = updatedUser.address;

        document.getElementById("update-profile-form").style.display = "none";
    });

    document.getElementById("cancel-update").addEventListener("click", function() {
        document.getElementById("update-profile-form").style.display = "none"; // Ẩn biểu mẫu cập nhật
    });
});