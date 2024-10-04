function checkOut(){
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    //kiểm tra rỗng
    if (cart.length === 0)
        {
            alert("your cart is empty")
            return false;
        }

    const totalAmount = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    alert( `your total is $${totalAmount.toFixed(2)}. Check-out successfully!`);

    //tạo hóa đơn
    generateInvoice(cart, totalAmount);
    //xóa giỏ hàng
    localStorage.removeItem("cart")

    return false;
}

function generateInvoice(cart, totalAmount){
    const user = JSON.parse(localStorage.getItem('user'));
    let invoiceContent = "Invoice\n\n";

    if(user && user.name){
        invoiceContent += `Customer: ${user.name}\n\n`
    }

    invoiceContent += "Items Purchased: \n"

    cart.forEach((item) =>{
        invoiceContent += `${item.name}- $${item.price} x $${item.quantity} = $${item.price * item.quantity} \n `
    });

    invoiceContent += `\nTotal: $${totalAmount}\n`;
    invoiceContent += "\nThank you for your purchased!\n"

    //tạo một dối tượng Blob
    const blob = new Blob(
        [invoiceContent],
        {type: "text/plain"}
    );

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "invoice.txt";
    link.click(); // kích hoạt download file
}