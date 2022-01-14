import { 
    getStorageItem,
    setStorageItem,
    formatPrice,
} from '../utils.js';
import { openCart } from './toggleCart.js';

export const addToCart = (id) => {
    console.log(id);
    openCart();
};