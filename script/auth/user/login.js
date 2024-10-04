document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".login-button");

    loginButton.addEventListener("click", function () {
        // Lấy giá trị từ các trường nhập liệu
        const email = document.getElementById("login-email").value.trim();
        const password = document.getElementById("login-password").value;

        // Lấy thông tin người dùng từ localStorage
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const user = JSON.parse(storedUser);

            // Kiểm tra thông tin đăng nhập
            if (email === user.email && password === user.password) {
                alert("Đăng nhập thành công!");
                // Chuyển hướng đến trang chính hoặc trang cá nhân
                window.location.href = "../../../view/customer/customerProfile.html";
            } else {
                alert("Email hoặc mật khẩu không chính xác. Vui lòng thử lại.");
            }
        } else {
            alert("Không có thông tin người dùng. Vui lòng đăng ký trước.");
        }
    });
});