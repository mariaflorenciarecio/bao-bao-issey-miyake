// IMPORTS GLOBALES //
import './js/cart/toggleCart.js';
import './js/cart/setupCart.js';

// IMPORTS ESPECIFICOS //
import fetchProducts from './js/fetchProducts.js';

const init = async () => {
    const products = await fetchProducts();
    console.log(products);
};

window.addEventListener('DOMContentLoaded', init);