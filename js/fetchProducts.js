import { allProducts } from './utils.js';

const fetchProducts = async () => {
    const response = await fetch(allProducts).catch((err) => 
        console.log(err));
    if (response) {
        return response.json();
    }
    return response;
};

export default fetchProducts;