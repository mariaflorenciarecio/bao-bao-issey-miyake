// IMPORTS GLOBALES //
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

import { addToCart } from '../cart/setupCart.js';
import { allProducts, formatPrice } from '../utils.js';

const loading = document.getElementById('spinner');
const centerDOM = document.getElementById('single-product-center');
const pageTitleDOM = document.getElementById('main-title')
const imgDOM = document.getElementById('single-product-img');
const titleDOM = document.getElementById('single-product-title');
const colorDOM = document.getElementById('single-product-color');
const priceDOM = document.getElementById('single-product-price');
const descDOM = document.getElementById('single-product-desc');
const cartBtn = document.getElementById('add-to-cart');

window.addEventListener('DOMContentLoaded', async function() {
    const urlID = window.location.search;

    try {
        const response = await fetch(allProducts);
        const products = await response.json();
        if (response.status >= 200 && response.status <= 299) {
            const singleProduct = products.filter((product) => `?id=${product.id}` === urlID)
            function renderSingleProduct() {
                singleProduct.forEach((product) => {
                    document.title = `${product.name.toUpperCase()} ${product.collection.toUpperCase()} | BAO BAO ISSEY MIYAKE`;
                    pageTitleDOM.textContent = `Home / ${product.collection} / ${product.category} / ${product.name}`;
                    imgDOM.src = `./assets/img/tienda/${product.name}-${product.collection}-${product.color}.jpg`;
                    imgDOM.alt = `${product.name} ${product.collection} ${product.color}`;
                    colorDOM.textContent = product.color;
                    titleDOM.textContent = `${product.name} ${product.collection}`;
                    priceDOM.textContent = formatPrice(product.price);
                    descDOM.textContent = product.description;
                })
            }
            renderSingleProduct()
        } else {
            centerDOM.innerHTML = `
                <div>
                    <h3 class="error">Oops! Algo salió mal.</h3>
                    <a href="#">Volver al home</a>
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