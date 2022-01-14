// IMPORTS GLOBALES //
import './js/cart/toggleCart.js';
import './js/cart/setupCart.js';

// IMPORTS ESPECIFICOS //
import fetchProducts from './js/fetchProducts.js';
import { setupStore, store } from './js/store.js';
import display from './js/displayProducts.js';

const init = async () => {
    const products = await fetchProducts();
    if(products) {
        // agregar productos a la tienda
        setupStore(products);
        const newIn = store.filter((product) => product.newIn === true);
        display(newIn, document.getElementById('new-in'));
        const essential = store.filter((product) => product.essential === true);
        display(essential, document.getElementById('essential'));
    }
};

window.addEventListener('DOMContentLoaded', init);