/////////////
// FILTROS //
/////////////

// IMPORT ESPECIFICO

import display from './card.js';

// FILTRAR POR CATEGORIA

const setupCategories = (store) => {
    let categories = ['all', ...new Set(store.map((product) => product.category))];
    const categoriesDOM = document.getElementById('categories');
    categoriesDOM.innerHTML = categories.map((category) => {
        return `<button class="category-button">${category}</button>`;
    })
    .join('');
    categoriesDOM.addEventListener('click', function(e) {
        const element = e.target
        if(element.classList.contains('category-button')) {
            let newStore = [];
            if(element.textContent === 'all') {
                newStore = [...store];
            }
            else {
                newStore = store.filter((product) => product.category === e.target.textContent)
            }
            display(newStore, document.getElementById('collection'), true)
        }
    })
};

// FILTRAR POR COLOR

const setupColors = (store) => {
    let colors = ['all', ...new Set(store.map((product) => product.color))];
    const colorsDOM = document.getElementById('colors');
    colorsDOM.innerHTML = colors.map((color) => {
        return `<button class="color-button">${color}</button>`;
    })
    .join('');
    colorsDOM.addEventListener('click', function(e) {
        const element = e.target;
        if(element.classList.contains('color-button')) {
            let colorStore = [];
            if(element.textContent === 'all') {
                colorStore = [...store];
            }
            else {
                colorStore = store.filter((product) => product.color === e.target.textContent)
            }
            display(colorStore, document.getElementById('collection'), true)
        }
    })
};

// FILTRAR POR PRECIO

const setupPrice = (store) => {
    const priceInput = document.getElementById('price-input');
    const priceValue = document.getElementById('price-value');

    let maxPrice = store.map((product) => product.price);
    maxPrice = Math.max(...maxPrice);
    maxPrice = Math.ceil(maxPrice/100);
    priceInput.value = maxPrice;
    priceInput.max = maxPrice;
    priceInput.min = 0;
    priceValue.textContent = `Máximo: $${maxPrice}`;

    priceInput.addEventListener('input', function () {
        const value = parseInt(priceInput.value);
        priceValue.textContent = `Máximo: $${value}`;
        let newStore = store.filter((product) => product.price/100 <= value);
        display(newStore, document.getElementById('collection'), true);
        if(newStore.length < 1) {
            const products = document.getElementById('collection');
            products.innerHTML = `
                <div class="error">
                    <i class="fas fa-exclamation-triangle"></i>
                    <span>Oops! No hay productos que coincidan con tu búsqueda.</span>
                </div>
            `;
        }
    });
};

// BUSCAR POR NOMBRE O CATEGORIA

const setupSearch = (store) => {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    searchForm.addEventListener('keyup', function() {
        const value = searchInput.value;
        if(value) {
            const newStore = store.filter((product) => {
                let {name, collection} = product;
                name = name.toLowerCase();
                collection = collection.toLowerCase();
                if(name.includes(value) || (collection.includes(value))) {
                    return product
                }
            });
            display(newStore, document.getElementById('collection'), true)
            if(newStore.length < 1) {
                const products = document.getElementById('collection');
                products.innerHTML = `
                    <div class="error">
                        <i class="fas fa-exclamation-triangle"></i>
                        <span>Oops! No hay productos que coincidan con tu búsqueda.</span>
                    </div>
                `;
            }
        } else {
            display(store, document.getElementById('collection'), true);
        }
    });
};

// ORDENAR POR RELEVANCIA, NOMBRE O PRECIO

const setupSort = (store) => {
    const sortBtn = document.getElementById('sort');
    sortBtn.onchange = function() {
        const sort = document.getElementById('sort').value;
        let sortStore = [];
        if(sort == 'Más relevantes') {
            sortStore = store.sort((a, b) => a.id - b.id);
        } else if(sort == 'A - Z') {
            sortStore = store.sort((a, b) => {
                if(a.name > b.name) {
                    return 1;
                }
                if(a.name < b.name) {
                    return -1;
                }
                if(a.collection > b.collection) {
                    return 1;
                }
                if(a.collection < b.collection) {
                    return -1;
                }
                return 0;
            });
        } else if(sort == 'Z - A') {
            sortStore = store.sort((a, b) => {
                if(a.name < b.name) {
                    return 1;
                }
                if(a.name > b.name) {
                    return -1;
                }
                if(a.collection < b.collection) {
                    return 1;
                }
                if(a.collection > b.collection) {
                    return -1;
                }
                return 0;
            });
        } else if(sort == 'Menor precio') {
            sortStore = store.sort((a, b) => {
                if(a.price > b.price) {
                    return 1;
                }
                if(a.price < b.price) {
                    return -1;
                }
                if(a.name > b.name) {
                    return 1;
                }
                if(a.name < b.name) {
                    return -1;
                }
                if(a.collection > b.collection) {
                    return 1;
                }
                if(a.collection < b.collection) {
                    return -1;
                }
                return 0;
            });
        } else {
            sortStore = store.sort((a, b) => {
                if(a.price < b.price) {
                    return 1;
                }
                if(a.price > b.price) {
                    return -1;
                }
                if(a.name > b.name) {
                    return 1;
                }
                if(a.name < b.name) {
                    return -1;
                }
                if(a.collection > b.collection) {
                    return 1;
                }
                if(a.collection < b.collection) {
                    return -1;
                }
                return 0;
            });
        }
        display(sortStore, document.getElementById('collection'), true);
    };
}

// EXPORT

export { setupCategories, setupColors, setupPrice, setupSearch, setupSort };