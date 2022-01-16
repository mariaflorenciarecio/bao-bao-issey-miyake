// IMPORTS GLOBALES //
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

import { addToCart } from '../cart/setupCart.js';
import { singleProductUrl, formatPrice } from '../utils.js';

const loading = document.getElementById('spinner');
const centerDOM = document.getElementById('single-product-center');
const pageTitleDOM = document.getElementById('main-title')
const imgDOM = document.getElementById('single-product-img');
const titleDOM = document.getElementById('single-product-title');
const colorDOM = document.getElementById('single-product-color');
const priceDOM = document.getElementById('single-product-price');
const descDOM = document.getElementById('single-product-desc');
const cartBtn = document.getElementById('add-to-cart');

let productID;

window.addEventListener('DOMContentLoaded', async function() {
    const urlID = window.location.search;

    try {
        const response = await fetch(`${singleProductUrl}${urlID}`);
        if (response.status >= 200 && response.status <= 299) {
            const product = await response.json();
            const {id, name, price, collection, category, color, description} = product;
            productID = id;
            document.title = `${name.toUpperCase()} ${collection.toUpperCase()} | BAO BAO ISSEY MIYAKE`;
            pageTitleDOM.textContent = `Home / ${collection} / ${category} / ${name}`;
            imgDOM.src = `./assets/img/tienda/${name}-${collection}-${color}.jpg`;
            imgDOM.alt = `${name} ${collection} ${color}`;
            colorDOM.textContent = color;
            titleDOM.textContent = `${name} ${collection}`;
            priceDOM.textContent = formatPrice(price);
            descDOM.textContent = description;
        } else {
            console.log(response.status, response.statusText);
            centerDOM.innerHTML = `
                <div>
                    <h3 class="error">Perdón, algo salío mal.</h3>
                    <a>Volver al home</a>
                </div>
            `;
        }
    } catch (error) {
        console.log(error);
    }
    loading.style.display = 'none';
});

cartBtn.addEventListener('click', function() {
    addToCart(productID);
});