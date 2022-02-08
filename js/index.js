// IMPORTS GLOBALES //

import './cart/toggleCart.js';
import './cart/setupCart.js';
import './newsletter/forms.js';

// IMPORTS ESPECIFICOS //

import fetchProducts from './fetchProducts.js';
import { setupStore, store } from './store.js';
import display from './displayProducts.js';
import renderCollection from './views/collection.js'
import renderHome from './views/home.js'

// MOSTRAR PRODUCTOS //

const init = async () => {
    const products = await fetchProducts();
    if(products) {
        setupStore(products);
        const newIn = store.filter((product) => product.newIn === true);
        display(newIn, document.getElementById('new-in'));
        const essential = store.filter((product) => product.essential === true);
        display(essential, document.getElementById('essential'));
    }
};

// SPA //

const spa = document.getElementById('spa');

const renderHomePage = () => {
    while(spa.firstChild)spa.removeChild(spa.firstChild);
    init();
    renderHome();
};

const renderCollectionPage = () => {
    while(spa.firstChild)spa.removeChild(spa.firstChild);
    renderCollection();
};

const routes = [
    {path: '/', action: 'showHomePage'},
    {path: '/tienda', action: 'showCollectionPage'},
]

const findPath = () => location.hash.slice(1).toLowerCase() || '/'

const findActionByPath = (path, routes) => routes.find(route => route.path === path || undefined)

const router = () => {
    const path = findPath()
    const route = findActionByPath(path, routes)
    switch(route.action) {
        case 'showHomePage':
            renderHomePage();
            break;
        case 'showCollectionPage':
            renderCollectionPage();
            break;
        default:
            console.error('Ruta inexistente.');
            break;
    }
}

window.onload = function() {
    router();
}

window.onhashchange = function() {
    router();
}
