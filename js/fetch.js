///////////
// FETCH //
///////////

// IMPORT ESPECIFICO

import { allProducts } from './utils.js';

// OBTENER DATOS DE ALLPRODUCTS.JSON

const fetchProducts = async () => {
    const response = await fetch(allProducts).catch((err) => 
        console.log(err));
    if (response) {
        return response.json();
    }
    return response;
};

// EXPORT

export default fetchProducts;