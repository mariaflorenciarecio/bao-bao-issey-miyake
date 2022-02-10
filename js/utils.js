///////////
// UTILS //
///////////

// DATA BASE

const allProducts = './db/allProducts.json';

// DAR FORMATO AL PRECIO

const formatPrice = (price) => {
    let formattedPrice = new Intl.NumberFormat('en-US', {
        style:'currency',
        currency: 'USD',
    }).format((price/100).toFixed(2));
    return formattedPrice;
};

// GET STORAGE

const getStorageItem = (item) => {
    let storageItem = localStorage.getItem(item);
    if(storageItem) {
        storageItem = JSON.parse(localStorage.getItem(item));
    } else {
        storageItem = [];
    }
    return storageItem;
};

// SET STORAGE

const setStorageItem = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item));
};

// EXPORT

export {
    allProducts,
    formatPrice,
    getStorageItem,
    setStorageItem,
};