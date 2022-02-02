// IMPORTS GLOBALES //

import './js/cart/toggleCart.js';
import './js/cart/setupCart.js';
import './js/switch.js';

// IMPORTS ESPECIFICOS //

import fetchProducts from './js/fetchProducts.js';
import { setupStore, store } from './js/store.js';
import display from './js/displayProducts.js';

// MOSTRAR PRODUCTOS //

const init = async () => {
    const products = await fetchProducts();
    if(products) {
        setupStore(products);
        const newIn = store.filter((product) => product.newIn === true);
        display(newIn, document.getElementById('new-in'));
        const essential = store.filter((product) => product.essential === true);
        display(essential, document.getElementById('essential'));
    }
};

window.addEventListener('DOMContentLoaded', init);
