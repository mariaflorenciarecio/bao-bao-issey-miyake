// IMPORTS GLOBALES //

import './cart/toggleCart.js';
import './cart/setupCart.js';

// IMPORTS ESPECIFICOS //

import { addToCart } from './cart/setupCart.js';
import { allProducts, formatPrice } from './utils.js';
import display from './displayProducts.js';

// DECLARAR VARIABLES //

const breadcrumbs = document.getElementById('breadcrumbs');
const productDetail = document.getElementById('product-detail');
const loading = document.getElementById('spinner');

///////////////////////////////////
// RENDERIZAR PRODUCTO DETALLADO //
///////////////////////////////////

window.addEventListener('load', async function() {
    const urlID = window.location.search;

    try {
        const response = await fetch(allProducts);
        const products = await response.json();

        // renderizar contenido si el estado es 200 OK, si no, renderizar error.

        if (response.status >= 200 && response.status <= 299) {
            const singleProduct = products.filter((product) => `?id=${product.id}` === urlID);
            const newIn = products.filter((product) => product.newIn === true);

            function renderSingleProduct() {
                singleProduct.forEach((product) => {
                    document.title = `${product.name.toUpperCase()} ${product.collection.toUpperCase()} | BAO BAO ISSEY MIYAKE`;
                    breadcrumbs.innerHTML = `
                        <ul>
                            <li><a href="./index.html">Inicio</a></li>
                            <li><a href="./index.html#/tienda">Colección</a></li>
                            <li><span>${product.name} ${product.collection}</span></li>
                        </ul>
                    `;
                    productDetail.innerHTML = `
                        <div class="product__img">
                            <img src="./assets/img/tienda/${product.name}-${product.collection}-${product.color}-Model.jpg" alt="${product.name} ${product.collection} Color ${product.color}">
                        </div>
                        <div class="product__info">
                            <p>SKU 000${product.id} • <span>${product.color}<span></p>
                            <h1>${product.name} ${product.collection}</h1>
                            <strong>${formatPrice(product.price)}</strong>
                            <div>
                            <div class="product__detail">
                                <span>Descripción</span>
                                <p>${product.description}</p>
                            </div>
                            <div class="product__detail">
                                <span>Dimensiones</span>
                                <p>${product.dimensions}</p>
                            </div>
                            <div class="product__detail">
                                <span>Composición</span>
                                <p>${product.composition}</p>
                            </div>
                            <div class="black-button" data-id="${product.id}">
                                <button>Comprar</button>
                            </div>
                            <div class="product__service">
                                <i class="fas fa-shipping-fast"></i>
                                <div>
                                    <span>Envío Gratis</span>
                                    <p>Compras superiores a $100.00</p>
                                </div>
                            </div>
                            <div class="product__service">
                                <i class="fas fa-sync"></i>
                                <div>
                                    <span>Cambios y Devoluciones</span>
                                    <p>30 días después de la compra</p>
                                </div>
                            </div>
                            <div class="product__service">
                                <i class="fas fa-store"></i>
                                <div>
                                    <span>Entrega en Tienda</span>
                                    <p>Retirá tu pedido en la tienda más cercana</p>
                                </div>
                            </div>
                        </div>
                    `;
                    display(newIn, document.getElementById('new-in'));
                });
            };
            renderSingleProduct();

        } else {
            productDetail.innerHTML = `
                <div>
                    <h1 class="error">Oops! Algo salió mal.</h1>
                </div>
            `;
        };

    } catch (error) {
        console.log(error);
    };

    // ocultar spinner al mostrar contenido

    loading.style.display = 'none';
});

// EVENTO AÑADIR AL CARRITO //

productDetail.addEventListener('click', function(e) {
    const parent = e.target.parentElement;
    const parentID = e.target.parentElement.dataset.id;

    if(parent.classList.contains('black-button')) {
        addToCart(parentID)
    };
});