// IMPORTS GLOBALES //
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

import { addToCart } from '../cart/setupCart.js';
import { allProducts, formatPrice } from '../utils.js';

const loading = document.getElementById('spinner');
const centerDOM = document.getElementById('single-product-center');
const productPage = document.getElementById('product-page');
const buySingleProductBtn = document.getElementById('buy-single-product');

console.log(productPage);

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
                    productPage.innerHTML = `
                        <div class="product__img">
                            <img src="./assets/img/tienda/${product.name}-${product.collection}-${product.color}.jpg" alt="${product.name} ${product.collection} Color ${product.color}">
                        </div>
                        <div class="product__info">
                            <p>${product.color}</p>
                            <h2>${product.name} ${product.collection}</h2>
                            <p>${formatPrice(product.price)}</p>
                            <p>${product.description}</p>
                            <div class="black-button" data-id="${product.id}">
                                <button>Comprar</button>
                            </div>
                        </div>
                    `;
                });
            };
            renderSingleProduct();
        } else {
            centerDOM.innerHTML = `
                <div>
                    <h3 class="error">Oops! Algo salió mal.</h3>
                    <a href="#">Volver al home</a>
                </div>
            `;
        };
    } catch (error) {
        console.log(error);
    };

    loading.style.display = 'none';
});

// APLICAR FUNCIONALIDAD A BOTON //

productPage.addEventListener('click', function(e) {
    const parent = e.target.parentElement;
    const parentID = e.target.parentElement.dataset.id;

    // boton añadir al carrito //

    if(parent.classList.contains('black-button')) {
        addToCart(parentID)
    };
});