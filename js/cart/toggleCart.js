const cartOverlay = document.getElementById('cart-overlay');
const toggleCartBtn = document.getElementById('toggle-cart');
const closeCartBtn = document.getElementById('close-cart');

toggleCartBtn.addEventListener('click', () => {
    cartOverlay.classList.add('cart__show');
});

closeCartBtn.addEventListener('click', () => {
    cartOverlay.classList.remove('cart__show');
});

export const openCart = () => {
    cartOverlay.classList.add('cart__show');
};