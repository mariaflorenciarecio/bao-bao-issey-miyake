///////////////////////////
// SELECCIONAR ELEMENTOS //
///////////////////////////

const productCard = document.getElementById("catalogo");
const cartItems = document.getElementById("carrito__items");
const subtotal = document.getElementById("subtotal");
const cartUnits = document.getElementById("navbar__items");

const toggleBtn = document.querySelector(".navbar__carrito");
const closeBtn = document.querySelector(".close");
const sidebar = document.querySelector(".carrito__sidebar");

///////////////////////////////////
// RENDERIZAR CARDS DE PRODUCTOS //
///////////////////////////////////

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

//////////////////////////////
// RENDERIZAR MODAL CARRITO //
//////////////////////////////

toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function closeSidebar() {
    sidebar.classList.remove("show-sidebar");
});

///////////////////////////////
// MOSTRAR ITEMS DEL CARRITO //
///////////////////////////////

let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

//////////////////////////////
// AGREGAR ITEMS AL CARRITO //
//////////////////////////////

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

////////////////////////
// ACTUALIZAR CARRITO //
////////////////////////

function updateCart() {
    renderCartItems();
    renderSubtotal();

    localStorage.setItem("CART", JSON.stringify(cart)); // guardar items del carrito en el local storage
};

//////////////////////////////////////////////////
// CALCULAR Y RENDERIZAR SUBTOTALES DEL CARRITO //
//////////////////////////////////////////////////

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

//////////////////////////////////
// RENDERIZAR ITEMS DEL CARRITO //
//////////////////////////////////

function renderCartItems() {
    cartItems.innerHTML = ""; // limpia los elementos del carrito
    cart.forEach((item) => {
        const itemCard = document.createElement("div");
        itemCard.classList.add("item");
        itemCard.innerHTML = `
            <div class="item__image">
                <img src="./assets/img/tienda/${item.name}-${item.collection}-${item.color}.jpg" alt="${item.name} ${item.collection} Color ${item.color}">
            </div>
            <div class="item__data">
                <div class="item__bin" onclick="removeFromCart(${item.id})">
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
        `;
        cartItems.appendChild(itemCard);
    });
};

//////////////////////////////
// BORRAR ITEMS DEL CARRITO //
//////////////////////////////

function removeFromCart(id) {
    cart = cart.filter((item) => item.id !== id);

    updateCart();
}

////////////////////////////////////////////////////
// SUMAR O RESTAR UNIDADES POR ITEM EN EL CARRITO //
////////////////////////////////////////////////////

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