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
const cartItems = document.getElementById("carrito__items")
const subtotal = document.getElementById("subtotal")
const cartUnits = document.getElementById("navbar__items")

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

// ARRAY DE CARRITO

let cart = [];

// AGREGAR PRODUCTOS AL CARRITO

function addToCart(id) {
    if (cart.some((item) => item.id === id)) {
        changeNumberOfUnits("plus", id);
    } else {
        const item = Products.find((product) => product.id === id);
        cart.push({
            ...item, 
            numberOfUnits: 1,
        });
    }; // checkea si el producto ya existe en el carrito
    updateCart();
};

// ACTUALIZAR CARRITO

function updateCart() {
    renderCartItems();
    renderSubtotal();
};

// CALCULAR Y RENDERIZAR SUBTOTALES
function renderSubtotal() {
    let totalPrice = 0, totalItems = 0;
    
    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });
    subtotal.innerHTML = `
        <span>Cantidad: ${totalItems}</span>
        <h3>Subtotal $${totalPrice}</h3>
    `;
    cartUnits.innerHTML = totalItems;
};

// RENDERIZAR ITEMS (CARRITO)

function renderCartItems() {
    cartItems.innerHTML = ""; // limpia los elementos del carrito
    cart.forEach((item) => {
        cartItems.innerHTML += `
            <div class="item">
                <div class="item__image">
                    <img src="./assets/img/tienda/${item.name}-${item.collection}-${item.color}.jpg" alt="${item.name} ${item.collection} Color ${item.color}">
                </div>
                <div class="item__data">
                    <div class="item__bin">
                        <i class="far fa-trash-alt"></i>
                    </div>
                    <h3><a href="#">${item.name} ${item.collection}</a></h3>
                    <h4>${item.color}</h4>
                    <div class="item__units">
                        <i class="fas fa-minus minus" onclick="changeNumberOfUnits('minus', ${item.id})"></i>
                        <strong>${item.numberOfUnits}</strong>
                        <i class="fas fa-plus plus" onclick="changeNumberOfUnits('plus', ${item.id})"></i>
                    </div>
                    <span class="item__subtotal">$${item.price} c/u</span>
                    <strong class="item__total">$${item.price*item.numberOfUnits}</strong>
                </div>
            </div>
        `;
    });
};

// CAMBIAR NUMERO DE UNIDADES DE UN ITEM

function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;
        if(item.id === id) {
            if (action === "minus" && numberOfUnits > 1) {
                numberOfUnits--;
            } else if (action === "plus" && numberOfUnits < item.inStock) {
                numberOfUnits++;
            }
        };
        return {
            ...item,
            numberOfUnits,
        };
    });
    updateCart();
};


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