 // Load and display products on page load
 document.addEventListener('DOMContentLoaded', function() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    displayProductsTop(products);
    displayProductsSunny(products);
    displayProductsSale(products);
    
});


//thu thập các tiêu chí lọc (criteria)
function getFilterCriteria(){
    return{
        category: document.getElementById('categoryFilter').value,
        minPrice: parseFloat(document.getElementById('minPrice').value) || 0,
        maxPrice: parseFloat(document.getElementById('maxPrice').value) || Number.MAX_VALUE,
    }
}