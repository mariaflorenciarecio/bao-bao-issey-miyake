//////////
// CARD //
//////////

// IMPORT ESPECIFICOS

import { formatPrice } from './utils.js';
import { addToCart } from './cart/functions.js';

// CARD DOM

const display = (products, element, filters) => {
    element.innerHTML = products.map((product) => {
        const {id, name, price, collection, color} = product;
        return `
            <div class="card">
                <div class="overlay__item">
                    <img src="./assets/img/tienda/${name}-${collection}-${color}.jpg" alt="${name} ${collection} Color ${color}">
                    <div class="overlay__content">
                        <div class="overlay__buttons">
                            <a href="product.html?id=${id}">
                                <i class="fas fa-search"></i>
                            </a>
                            <button class="overlay__cart" data-id="${id}">
                                <i class="fas fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card__detail">
                    <h3><a href="product.html?id=${id}">${name} ${collection}</a></h3>
                    <p>${formatPrice(price)}</p>
                </div>
            </div>
        `;
    })
    .join('');

    if (filters) return;

    element.addEventListener('click', function(e) {
        const parent = e.target.parentElement;
        if(parent.classList.contains('overlay__cart')) {
            addToCart(parent.dataset.id)
        }
    });
};

// EXPORT

export default display;