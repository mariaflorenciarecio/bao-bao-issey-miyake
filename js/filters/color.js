import display from '../displayProducts.js';

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
            display(colorStore, document.getElementById('collection'))
        }
    })
};

export default setupColors;