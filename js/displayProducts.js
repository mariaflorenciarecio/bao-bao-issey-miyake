import { formatPrice } from './utils.js';
import { addToCart } from './cart/setupCart.js';

const productsQuantity = document.getElementById('products-quantity');

const display = (products, element) => {
    // mostrar elementos
    element.innerHTML = products.map((product) => {
        const {id, name, price, collection, color} = product;
        return `
            <div class="card">
                <div class="overlay__item">
                    <img src="./assets/img/tienda/${name}-${collection}-${color}.jpg" alt="${name} ${collection} Color ${color}">
                    <div class="overlay__content">
                        <div class="overlay__buttons">
                            <a href="producto.html?id=${id}">
                                <i class="fas fa-search"></i>
                            </a>
                            <button class="overlay__cart" data-id="${id}">
                                <i class="fas fa-cart-plus"></i>
                            </button>
                            <button data-id="${id}">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card__detail">
                    <h3><a href="#">${name} ${collection}</a></h3>
                    <p>${formatPrice(price)}</p>
                </div>
            </div>
        `;
    })
    .join('');
    element.addEventListener('click', function(e) {
        const parent = e.target.parentElement;
        if(parent.classList.contains('overlay__cart')) {
            addToCart(parent.dataset.id)
        }
    });
    productsQuantity.innerHTML = `
            <i class="fas fa-shopping-bag"></i>
            <span>${products.length}</span>
        `;
};

export default display;