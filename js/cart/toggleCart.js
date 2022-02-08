/////////////
// EVENTOS //
/////////////

// IMPORT ESPECIFICO

import { subscribeForm, unsubscribeForm } from '../newsletter/forms.js';

// DECLARAR VARIABLES

const cartOverlay = document.getElementById('cart-overlay');
const toggleCartBtn = document.getElementById('toggle-cart');
const closeCartBtn = document.getElementById('close-cart');
const checkOut = document.getElementById('checkout');

// MENSAJE "CARRITO VACIO"

const emptyMessage = document.createElement('div');
emptyMessage.classList.add('empty-message');
emptyMessage.innerHTML = `
    <h2>Oops!</h2>
    <p>Tu carrito esta vacío. Por favor, agregá algún producto.</p>
`;
document.getElementById('notifications').appendChild(emptyMessage);

// MENSAJE "GRACIAS POR TU COMPRA"

const thanksMessage = document.createElement('div');
thanksMessage.classList.add('thanks-message');
thanksMessage.innerHTML = `
    <h2>¡GRACIAS POR TU COMPRA!</h2>
    <p>Esperamos que hayas tenido una agradable experiencia en BAO BAO ISSEY MIYAKE. ¡Hasta la próxima!</p>
    <a href="./index.html">Ir a home</a>
`;
document.getElementById('notifications').appendChild(thanksMessage);

// ABRIR CARRITO AL AGREGARLE UN ITEM

export const openCart = () => {
    cartOverlay.classList.add('cart__show');
    subscribeForm.classList.remove('newsletter__show');
    unsubscribeForm.classList.remove('newsletter__show');
    emptyMessage.classList.remove('empty-message__show');
};

// ABRIR Y CERRAR CARRITO SI NO ESTA VACIO

toggleCartBtn.addEventListener('click', () => {
    if(document.getElementById('cart-item-count').textContent == 0) {
        emptyMessage.classList.toggle('empty-message__show');
    } else {
        cartOverlay.classList.toggle('cart__show');
    }
    subscribeForm.classList.remove('newsletter__show');
    unsubscribeForm.classList.remove('newsletter__show');
});

// CERRAR CARRITO

closeCartBtn.addEventListener('click', () => {
    cartOverlay.classList.remove('cart__show');
});

// ABRIR MENSAJE "GRACIAS POR TU COMPRA"

checkOut.addEventListener('click', () => {
    cartOverlay.classList.remove('cart__show');
    thanksMessage.classList.add('thanks-message__show');
});

// EXPORT

export default emptyMessage;