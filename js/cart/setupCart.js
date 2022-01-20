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
    let item = cart.find((cartItem) => cartItem.id === id);
    if(!item) {
        let product = findProduct(id);
        product = {...product, amount:1};
        cart = [...cart, product];
        addToCartDOM(product);
    } else {

    }
    openCart();
};

const init = () => {
}
init();