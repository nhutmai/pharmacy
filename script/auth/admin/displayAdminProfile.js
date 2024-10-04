function displayAdminProfile(){
    const storedAdmin = JSON.parse(localStorage.getItem('admin'));

    if(storedAdmin){
        document.getElementById('adminName').textContent = storedAdmin.name;
        document.getElementById('adminEmail').textContent = storedAdmin.email;
    }


}

window.onload = displayAdminProfile;