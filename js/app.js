// // siempre indicar la extension
// import {Products} from "./data.js";
// import {Product} from "./producto.js";
// import {Cart} from "./carrito.js";
// import {Client} from "./clientes.js";
// import {renderList} from "./utils.js";
// import {footer} from "./footer.js";
// import {addToCartButton} from "./eventos.js";


// const cart = new Cart();

/**

// simulacion item agregado al carrito por el usuario
// const product1 = new Product(1, "Cartera Tote", 200000, 10, true);
// cart.addItem(product1)

**/

// console.log(cart.listItems())

// const products = cart.listItems();

// -------------------- FORMULARIO USUARIO***
// const formProduct = document.getElementById("form-product")
// const inputIdProduct = document.getElementById("input-id-product")
// const inputNameProduct = document.getElementById("input-name-product")
// const inputPriceProduct = document.getElementById("input-price-product")
// const inputQuantityProduct = document.getElementById("input-quantity-product")

// formProduct.addEventListener("submit", () => {
//     const id = +inputIdProduct.value
//     const name = inputNameProduct.value
//     const price = +inputPriceProduct.value
//     const quantity = +inputQuantityProduct.value

//     const newProduct = new Product (id, name, price, quantity, true)

//     cart.addItem(newProduct)
// })

// renderList("products-list", products)

// SELECCIONAR ELEMENTOS

const productCard = document.getElementById("catalogo")

// RENDERIZAR PRODUCTOS (CARDS)

function renderProducts() {
    Products.forEach( (product) => {
        productCard.innerHTML += `
            <div class="card">
                <div class="overlay__item">
                    <img src="./assets/img/tienda/${product.name}-${product.collection}-${product.color}.jpg" alt="${product.name} ${product.collection} Color ${product.color}">
                    <div class="overlay__content">
                        <div class="white-button" onclick="addToCart(${product.id})">
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
                <div class="card__detail">
                    <h4>${product.color}</h4>
                    <h3><a href="#">${product.name} ${product.collection}</a></h3>
                    <p>$${product.price}</p>
                </div>
            </div>
        `;
    });
};
renderProducts();

// AGREGAR PRODUCTOS AL CARRITO

function addToCart(id) {
    console.log(id);
}

/**
for (const productDetail of Products) {
    let productCard = document.createElement("div");
    // let namePhoto = productDetail.name.replaceAll(" ", "-")
    productCard.classList.add("card");
    productCard.innerHTML = `
        <div class="overlay__item">
            <img src="./assets/img/tienda/${productDetail.name}-${productDetail.collection}-${productDetail.color}.jpg" alt="${productDetail.name} ${productDetail.collection} Color ${productDetail.color}">
            <div class="overlay__content">
                <div class="white-button">
                    <a href="#">Comprar</a>
                </div>
            </div>
        </div>
        <div class="card__detail">
            <h4>${productDetail.color}</h4>
            <h3><a href="#">${productDetail.category} ${productDetail.collection}</a></h3>
            <p>$${productDetail.price}</p>
        </div>
    `;
    document.getElementById("productos").appendChild(productCard);
}
**/

/**
const renderList = (listId, list) => {

    const listContainer = document.getElementById(listId)

    for (const item of list) {
        const itemList = document.createElement("li")

        itemList.innerHTML = `<span><strong>${item.name}</strong></span>`

        listContainer.appendChild(itemList)
    }
}

**/