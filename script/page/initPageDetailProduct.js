 // Load and display products on page load
 document.addEventListener('DOMContentLoaded', function() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    displayProductsDetail(products);
    
    
});