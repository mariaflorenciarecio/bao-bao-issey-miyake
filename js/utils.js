/*
const getElement = (selection) => {
    const element = document.querySelector(selection)
    if (element) return element
    throw new Error(`Por favor chequear "${selection}", no existe tal elemento.`)
}

export {
    getElement
}
*/

const allProducts = './products.json';

const getStorageItem = (item) => {
    let storageItem = localStorage.getItem(item);
    if(storageItem) {
        storageItem = JSON.parse(localStorage.getItem(item));
    } else {
        storageItem = [];
    }
    return storageItem;
};
const setStorageItem = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item));
};

export {
    allProducts,
    getStorageItem,
    setStorageItem,
}