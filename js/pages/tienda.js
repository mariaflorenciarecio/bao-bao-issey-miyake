// IMPORTS GLOBALES //
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

// IMPORTS FILTROS //
import setupSearch from '../filters/search.js';
import setupCategories from '../filters/categories.js';
import setupColors from '../filters/color.js';
import setupPrice from '../filters/price.js';

// IMPORTS ESPECIFICOS //
import { store } from '../store.js';
import display from '../displayProducts.js';

const loading = document.getElementById('spinner');

display(store, document.getElementById('collection'));

setupSearch(store);
setupCategories(store);
setupColors(store);
setupPrice(store);

loading.style.display = 'none';