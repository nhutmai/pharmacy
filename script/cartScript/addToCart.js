function addToCart(productId){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let products = JSON.parse(localStorage.getItem('products')) || [];

    const product = products.find(product => product.id === productId);

    if(product){
        const cartItem = cart.find(item => item.id === productId);
        if(cartItem){
            cartItem.quantity += 1;
        }else {
            cart.push({...product, quantity: 1});
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart success');
    }else{
        alert('Product not found');
    }
}