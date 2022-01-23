import { getStorageItem, setStorageItem } from './utils.js';

let store = getStorageItem('store');
const setupStore = (products) => {
    store = products.map((product) => {
        const { id, name, price, collection, category, color, stock, newIn, essential } = product;
        return { id, name, price, collection, category, color, stock, newIn, essential };
    });
    setStorageItem('store', store);
};

const findProduct = (id) => {
    let product = store.find((product) => product.id == id);
    return product;
};

export { store, setupStore, findProduct };