import display from '../displayProducts.js';

const sortBtn = document.getElementById('sort');

const setupSort = (store) => {
    sortBtn.onchange = function sortProducts() {
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
        display(sortStore, document.getElementById('collection'));
    };
}

export default setupSort;