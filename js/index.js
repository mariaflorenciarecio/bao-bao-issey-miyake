///////////
// INDEX //
///////////

// IMPORTS GLOBALES

import './cart/toggle.js';
import './cart/functions.js';
import './newsletter/forms.js';

// IMPORTS ESPECIFICOS

import fetchProducts from './fetch.js';
import { setupStore, store } from './store.js';
import display from './card.js';
import renderCollection from './spa/collectionPage.js'
import renderHome from './spa/homePage.js'

// MOSTRAR PRODUCTOS EN LA SPA (HOME + COLLECTION)

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

// SPA (SINGLE PAGE APLICATION) //

// declarar variables

const spa = document.getElementById('spa');

// renderizar las paginas home y collection

const renderHomePage = () => {
    while(spa.firstChild)spa.removeChild(spa.firstChild);
    init();
    renderHome();
};

const renderCollectionPage = () => {
    while(spa.firstChild)spa.removeChild(spa.firstChild);
    renderCollection();
};

// rutas

const routes = [
    {path: '/', action: 'showHomePage'},
    {path: '/tienda', action: 'showCollectionPage'},
];

// path, action

const findPath = () => location.hash.slice(1).toLowerCase() || '/';
const findActionByPath = (path, routes) => routes.find(route => route.path === path || undefined);

// router

const router = () => {
    const path = findPath();
    const route = findActionByPath(path, routes);
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
    };
};

// ejecutar funcion cuando la ventana se haya cargado

window.onload = function() {
    router();
};

// ejecutar funcion cuando cambie la almohadilla de la url

window.onhashchange = function() {
    router();
};