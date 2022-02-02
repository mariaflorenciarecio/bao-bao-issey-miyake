import display from '../displayProducts.js';

const sortBtn = document.getElementById('sort');

const setupSort = (store) => {
    sortBtn.onchange = function sortProducts() {
        const sort = document.getElementById('sort').value;
        let sortStore = [];
        if(sort == 'A - Z') {
            sortStore = store.sort((a, b) => (a.name < b.name) ? - 1 : 1);
        } else if(sort == 'Z - A') {
            sortStore = store.sort((a, b) => (b.name < a.name) ? - 1 : 1);
        } else if(sort == 'Menor precio') {
            sortStore = store.sort((a, b) => a.price - b.price);
        } else {
            sortStore = store.sort((a, b) => b.price - a.price);
        }
        display(sortStore, document.getElementById('collection'));
    };
}

export default setupSort;
// sortStore = store.sort((a, b) => (a.name < b.name) ? - 1 : 1);
// sortStore = store.sort((a, b) => (b.name < a.name) ? - 1 : 1);
// sortStore = store.sort((a, b) => a.price - b.price);
// sortStore = store.sort((a, b) => b.price - a.price);
// display(sortStore, document.getElementById('collection'))
