function removeFromCart(){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart = cart.filter(item => item.id !== productID);

    localStorage.getItem('cart', JSON.stringify(cart));

    alert('Product removed success');
}