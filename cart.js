// Giỏ hàng sẽ lưu trữ các mặt hàng được thêm vào
let cart = [];

// Hàm để thêm sản phẩm vào giỏ hàng
function addToCart(product) {
    cart.push(product);
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
    updateCart();
}

// Hàm để cập nhật giỏ hàng
function updateCart() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = ''; // Xóa nội dung cũ

    cart.forEach((item, index) => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - Giá: ${item.price} VND`;
        cartContainer.appendChild(cartItem);
    });
}
