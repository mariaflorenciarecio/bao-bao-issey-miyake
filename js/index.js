// // siempre indicar la extension
import {Products} from "./data.js";
import {Cart} from "./carrito.js";
import {Client} from "./clientes.js";
import {Product} from "./productos.js";
import {renderList} from "./utils.js";
import {footer} from "./footer.js";

const cart = new Cart();

// simulacion item agregado al carrito por el usuario
// const product1 = new Product(1, "Cartera Tote", 200000, 10, true);
// cart.addItem(product1)
console.log(cart.listItems())

const products = cart.listItems();

// -------------------- FORMULARIO USUARIO***
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

// -------------------- CARDS

for (const productDetail of Products) {
    let productCard = document.createElement("div");
    let namePhoto = productDetail.name.replaceAll(" ", "-")
    productCard.classList.add("card");
    productCard.innerHTML = `
        <div class="overlay__item">
        <img src="./assets/img/tienda/${namePhoto}.jpg" alt="${productDetail.name}">
            <div class="overlay__content">
                <div class="white-button">
                    <a href="#">Comprar</a>
                </div>
            </div>
        </div>
        <div class="card__detail">
            <h4>${productDetail.color}</h4>
            <h3>${productDetail.category} ${productDetail.collection}</h3>
            <p>$${productDetail.price}</p>
        </div>
    `;
    document.getElementById("catalogue").appendChild(productCard);
}

// -------------------- FOOTER

