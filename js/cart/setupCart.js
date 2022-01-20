import { 
    getStorageItem,
    setStorageItem,
    formatPrice,
} from '../utils.js';
import { openCart } from './toggleCart.js';
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';

const cartItemCountDOM = document.getElementById('cart-item-count');
const cartItemsDOM = document.getElementById('cart-items');
const cartTotalDOM = document.getElementById('cart-total');

let cart = getStorageItem('cart');

export const addToCart = (id) => {
    let item = cart.find((cartItem) => cartItem.id == id);
    if(!item) {
        let product = findProduct(id);
        product = {...product, amount:1};
        cart = [...cart, product];
        addToCartDOM(product);
    } else {
        const amount = increaseAmount(id);
        const items = [...cartItemsDOM.querySelectorAll('.cart-item-amount')];
        const newAmount = items.find((value) => value.dataset.id == id);
        newAmount.textContent = amount;
    }
    displayCartItemCount();
    displayCartTotal();
    setStorageItem('cart', cart);
    openCart();
};

function displayCartItemCount() {
    const amount = cart.reduce((total, cartItem) => {
        return total += cartItem.amount
    },0);
    cartItemCountDOM.textContent = amount;
};

function displayCartTotal() {
    let total = cart.reduce((total, cartItem) => {
        return total += cartItem.price * cartItem.amount
    },0);
    const amount = cart.reduce((total, cartItem) => {
        return total += cartItem.amount
    },0);
    cartTotalDOM.innerHTML = `
        <span>Cantidad: ${amount}</span>
        <h3>Total ${formatPrice(total)}</h3>
    `;
};

function displayCartItemsDOM() {
    cart.forEach((cartItem) => {
        addToCartDOM(cartItem);
    });
};

// BORRAR ITEM DEL CARRITO //

function removeItem(id) {
    cart = cart.filter((cartItem) => cartItem.id != id);
};

function increaseAmount(id) {
    let newAmount;
    cart = cart.map((cartItem) => {
        if(cartItem.id == id) {
            newAmount = cartItem.amount + 1;
            cartItem = {...cartItem, amount: newAmount};
        };
        return cartItem;
    });
    return newAmount;
};

function setupCartFunctionality() {
    cartItemsDOM.addEventListener('click', function(e) {
        const element = e.target;
        const parent = element.parentElement;
        const id = e.target.dataset.id;
        const parentID = e.target.parentElement.dataset.id;

        if(element.classList.contains('cart-item-remove-btn')) {
            removeItem(id);
            parent.parentElement.remove();
        };

        displayCartItemCount();
        displayCartTotal();
        setStorageItem('cart', cart);
    });
};

const init = () => {
    displayCartItemCount();
    displayCartTotal();
    displayCartItemsDOM();
    setupCartFunctionality();
};
init();