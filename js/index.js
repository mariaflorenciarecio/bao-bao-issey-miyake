// // siempre indicar la extension
import {Products} from "./data.js";
import {Cart} from "./carrito.js";
import {Product} from "./productos.js";
import {renderList} from "./utils.js";

const cart = new Cart();

// simulacion item agregado al carrito por el usuario
// const product1 = new Product(1, "Cartera Tote", 200000, 10, true);
// cart.addItem(product1)
console.log(cart.listItems())

const products = cart.listItems();

// form creacion de productos
const formProduct = document.getElementById("form-product")
const inputIdProduct = document.getElementById("input-id-product")
const inputNameProduct = document.getElementById("input-name-product")
const inputPriceProduct = document.getElementById("input-price-product")
const inputQuantityProduct = document.getElementById("input-quantity-product")

formProduct.addEventListener("submit", () => {
    const id = +inputIdProduct.value
    const name = inputNameProduct.value
    const price = +inputPriceProduct.value
    const quantity = +inputQuantityProduct.value

    const newProduct = new Product (id, name, price, quantity, true)

    cart.addItem(newProduct)
})

renderList("products-list", products)

// card

for (const productDetail of Products) {
    let productCard = document.createElement("div");
    let namePhoto = productDetail.name.replaceAll(' ', '-')
    productCard.classList.add('flex__item');
    // definicion del innetHTML del elemento con una plantilla de texto
    productCard.innerHTML = `<div class="flex__item">
                                <a href="#">
                                    <img class="imgResponsive" src="./assets/img/tienda/${namePhoto}.png" alt="${productDetail.name}">
                                </a>
                            </div>
                            <div class="flex__detail">
                                <h3>${productDetail.name}</h3>
                                <p>$${productDetail.price}</p>
                            </div>`;
document.getElementById('store').appendChild(productCard);
}