import display from '../displayProducts.js';

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
            display(newStore, document.getElementById('collection'))
        }
    })
};

export default setupCategories;