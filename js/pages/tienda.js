// IMPORTS GLOBALES //
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
import'../filters/sort.js';

// IMPORTS FILTROS //
import setupCategories from '../filters/categories.js';
import setupColors from '../filters/color.js';
import setupPrice from '../filters/price.js';
import setupSearch from '../filters/search.js';

// IMPORTS ESPECIFICOS //
import { store } from '../store.js';
import display from '../displayProducts.js';
import setupSort from '../filters/sort.js';

const loading = document.getElementById('spinner');

display(store, document.getElementById('collection'));

setupCategories(store);
setupColors(store);
setupPrice(store);
setupSearch(store);
setupSort(store);

loading.style.display = 'none';