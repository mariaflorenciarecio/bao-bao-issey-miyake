/////////////////////
// PAGINA PRODUCTO //
/////////////////////

// IMPORTS GLOBALES

import './cart/toggle.js';
import './cart/functions.js';
import './newsletter/forms.js';

// IMPORTS ESPECIFICOS

import { addToCart } from './cart/functions.js';
import { allProducts, formatPrice } from './utils.js';
import display from './card.js';

// DECLARAR VARIABLES

const breadcrumbs = document.getElementById('breadcrumbs');
const productDetail = document.getElementById('product-detail');

// MOSTRAR DETALLES DEL PRODUCTO SELECCIONADO

window.addEventListener('load', async function() {
    const urlID = window.location.search;

    // INTENTAR SEGUIR LAS INSTRUCCIONES...

    try {

        // obtener datos de allproducts.json

        const response = await fetch(allProducts);
        const products = await response.json();

        // SI EL ESTADO ES 200 OK, MOSTRAR CONTENIDO...

        if (response.status >= 200 && response.status <= 299) {

            // url dinamica
            
            const singleProduct = products.filter((product) => `?id=${product.id}` === urlID); 
            
            // mostrar contenido

            singleProduct.forEach((product) => {

                // titulo del producto

                document.title = `${product.name.toUpperCase()} ${product.collection.toUpperCase()} | BAO BAO ISSEY MIYAKE`;

                // dom breadcrumbs

                breadcrumbs.innerHTML = `
                    <ul>
                        <li><a href="./index.html">Inicio</a></li>
                        <li><a href="./index.html#/tienda">Colección</a></li>
                        <li><span>${product.name} ${product.collection}</span></li>
                    </ul>
                `;

                // dom detalles de producto

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
                    </div>
                `;

                // mostrar seccion novedades

                const newIn = products.filter((product) => product.newIn === true); 
                display(newIn, document.getElementById('new-in'));
            });

        // ...SI NO, MOSTRAR ERROR

        } else {
            productDetail.innerHTML = `
                <div>
                    <h1 class="error">Oops! Algo salió mal.</h1>
                </div>
            `;
        };
    
    // ...RESPUESTA SI SE PRODUCE UNA EXCEPCION EN EL BLOQUE "TRY"

    } catch (error) {
        console.log(error);
    };
});

// AÑADIR AL CARRITO

productDetail.addEventListener('click', function(e) {
    const parent = e.target.parentElement;
    const parentID = e.target.parentElement.dataset.id;

    if(parent.classList.contains('black-button')) {
        addToCart(parentID)
    };
});