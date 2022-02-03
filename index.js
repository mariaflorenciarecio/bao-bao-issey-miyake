// IMPORTS GLOBALES //

import './js/cart/toggleCart.js';
import './js/cart/setupCart.js';

// IMPORTS ESPECIFICOS //

import fetchProducts from './js/fetchProducts.js';
import { setupStore, store } from './js/store.js';
import display from './js/displayProducts.js';

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

const spa = document.getElementById('spa')

const renderHomePage = () => {
    while(spa.firstChild)spa.removeChild(spa.firstChild);
    init();
    renderHero();
    switchHero();
    renderNewIn();
    renderSlider();
    renderEssential();
};

const renderHero = () => {
    while(spa.firstChild)spa.removeChild(spa.firstChild);
    const heroSection = document.createElement('section');
    heroSection.classList.add('hero');
    heroSection.innerHTML = `
        <h1>Bao Bao Issey Miyake</h1>
        <div class="hero__title">
            <p>Your</p>
            <div class="hero__effect">
                <span>clutch</span>
                <span>handbag</span>
                <span>crossbody</span>
                <span>backpack</span>
                <span>clutch</span>
            </div>
        </div>
        <p>Colección de carteras con un concepto y método de producción innovadores. Formas versátiles infinitas, generadas a partir de una estructura de piezas triangulares. Belleza, diversión, sorpresa y practicidad para cada momento de tu vida.</p>
        <div class="hero__button">
            <a href="#/tienda">Descubrir</a>
        </div>
        <video class="hero__video" autoplay muted loop>
            <source src="./assets/video/baobao-origin.mp4" type="video/mp4">
        </video>
        <button class="switch">
            <i class="fas fa-play"></i>
            <i class="fas fa-pause"></i>
            <span class="switch__button"></span>
        </button>
    `;
    spa.appendChild(heroSection);
};

const switchHero = () => {
    const switchBtn = document.querySelector(".switch")
    const video = document.querySelector(".hero__video")

    switchBtn.addEventListener("click", function() {
        if (!switchBtn.classList.contains("slide")) {
            switchBtn.classList.add("slide");
            video.pause();
        } else {
            switchBtn.classList.remove("slide");
            video.play();
        }
    });
};

const renderNewIn = () => {
    const newInSection = document.createElement('section');
    newInSection.classList.add('store');
    newInSection.innerHTML = `
        <h2>New in</h2>
        <div id="new-in">
            <!-- productos renderizados -->
        </div>
        <div class="black-button">
            <a href="#/tienda">Ver más</a>
        </div>
    `;
    spa.appendChild(newInSection);
};

const renderSlider = () => {
    const sliderSection = document.createElement('section');
    sliderSection.classList.add('slider');
    sliderSection.innerHTML = `
        <div class="slider__slide">
            <img src="./assets/img/index/carteras-tote.png" alt="Carteras Tote">
        </div>
        <div class="slider__slide">
            <img src="./assets/img/index/coleccion-lucent.png" alt="Colección Lucent">
        </div>
        <div class="slider__slide">
            <img src="./assets/img/index/proximamente.png" alt="Próximamente">
        </div>
        <div class="slider__buttons">
            <button type="button" class="prevBtn">
                <i class="fas fa-arrow-left"></i>
            </button>
            <button type="button" class="nextBtn">
                <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    `;
    spa.appendChild(sliderSection);
};

const renderEssential = () => {
    const essentialSection = document.createElement('section');
    essentialSection.classList.add('store');
    essentialSection.innerHTML = `
        <h2>Esenciales</h2>
        <div id="essential">
            <!-- productos renderizados -->
        </div>
        <div class="black-button">
            <a href="#/tienda">Ver más</a>
        </div>
    `;
    spa.appendChild(essentialSection)
};

const routes = [
    {path: '/', action: 'showHomePage'},
    {path: '/tienda', action: 'showCollectionPage'},
    {path: '/producto', action: 'showProductPage'}
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
            console.log('Accion al mostrar coleccion');
            break;
        case 'showProductPage':
            console.log('Accion al mostrar producto');
            break;
        default:
            console.error('Ruta inexistente');
            break;
    }
}

window.onload = function() {
    router();
}

window.onhashchange = function() {
    router();
}
