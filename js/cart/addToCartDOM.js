import { formatPrice } from '../utils.js';

const cartItemsDOM = document.getElementById('cart-items');

const addToCartDOM = ({id, name, price, collection, color, amount}) => {
    const div = document.createElement('div');
    div.classList.add('item');
    div.setAttribute('data-id', id);
    div.innerHTML = `
        <div class="item__image">
            <img src="./assets/img/tienda/${name}-${collection}-${color}.jpg" alt="${name} ${collection} Color ${color}">
        </div>
        <div class="item__data">
            <i class="far fa-trash-alt item__bin" data-id="${id}"></i>
            <h3><a href="#">${name} ${collection}</a></h3>
            <h4>${color}</h4>
            <div class="item__units">
                <div class="cart-item-decrease-btn" data-id="${id}">
                    <i class="fas fa-minus"></i>
                </div>
                <strong class="cart-item-amount" data-id="${id}">${amount}</strong>
                <div class="cart-item-increase-btn" data-id="${id}">
                    <i class="fas fa-plus"></i>
                </div>
            </div>
            <span class="item__subtotal">${formatPrice(price)} c/u</span>
            <strong class="item__total">${formatPrice(price*amount)}</strong>
        </div>
    `;
    cartItemsDOM.appendChild(div);
};

export default addToCartDOM;