////////////
// TIENDA //
////////////

// IMPORT ESPECIFICO

import { getStorageItem, setStorageItem } from './utils.js';

// DECLARAR VARIABLE

let store = getStorageItem('store');

// CONFIGURAR TIENDA

const setupStore = (products) => {
    store = products.map((product) => {
        const { id, name, price, collection, category, color, description, dimensions, composition, newIn, essential } = product;
        return { id, name, price, collection, category, color, description, dimensions, composition, newIn, essential };
    });
    setStorageItem('store', store);
};

// ENCONTRAR UN PRODUCTO

const findProduct = (id) => {
    let product = store.find((product) => product.id == id);
    return product;
};

// EXPORT

export { store, setupStore, findProduct };