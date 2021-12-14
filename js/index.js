// siempre indicar la extension
import {Products} from "./data.js";
import {Cart} from "./carrito.js";
import {Product} from "./productos.js";

const cart = new Cart();

// simulacion item agregado al carrito por el usuario
// const product1 = new Product(1, "Cartera Tote", 200000, 10, true);
// cart.addItem(product1)
console.log(cart.listItems())