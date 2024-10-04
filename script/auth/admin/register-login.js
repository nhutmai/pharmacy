const admin = {
    name: "admin",
    password: "1",
    email: "admin@gmail.com",
  };
  localStorage.setItem("admin", JSON.stringify(admin));
  
  function adminLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const storeAdmin = JSON.parse(localStorage.getItem("admin"));
  
    if (
      storeAdmin &&
      storeAdmin.email === email &&
      storeAdmin.password === password
    ) {
      alert("Login successfully");
      goToPage("/view/admin/adminHome.html");
    } else {
      alert("Login failed, check your email or password");
    }
  }