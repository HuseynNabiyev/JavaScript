document.getElementById('add-to-cart').addEventListener('click', function() {
    const quantity = document.getElementById('quantity').value;
    const message = document.getElementById('message');
    if (quantity >= 1) {
        message.textContent = `Added ${quantity} item(s) to cart!`;
        message.style.color = 'green';
    } else {
        message.textContent = 'Quantity must be at least 1.';
        message.style.color = 'red';
    }
});