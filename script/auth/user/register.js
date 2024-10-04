document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn chặn hành động gửi mặc định

        // Lấy giá trị từ các trường nhập liệu
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        // Kiểm tra dữ liệu đầu vào
        if (name === "" || email === "" || password === "") {
            alert("Vui lòng điền đầy đủ thông tin!");
            return;
        }

        // Lưu thông tin vào localStorage
        const user = {
            name: name,
            email: email,
            password: password
        };
        localStorage.setItem("user", JSON.stringify(user));

        // Hiển thị thông báo thành công
        alert("Đăng ký thành công!!!")

        // Chuyển hướng đến trang đăng nhập
        setTimeout(function() {
            window.location.href = "../../../view/customer/auth/userLogin.html";
        }, 0);
    });
});