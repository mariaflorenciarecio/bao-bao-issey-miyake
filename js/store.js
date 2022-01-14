import { getStorageItem, setStorageItem } from './utils.js';

let store = getStorageItem('store');

const setupStore = (products) => {
    store = products.map((product) => {
        const {id, name, price, collection, category, color, stock, newIn, essential} = product;
        return {id, name, price, collection, category, color, stock, newIn, essential};
    });
    setStorageItem('store', store);
};

const findProduct = () => {};

export { store, setupStore, findProduct };