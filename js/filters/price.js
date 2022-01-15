import display from '../displayProducts.js';

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
        display(newStore, document.getElementById('collection'));
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

export default setupPrice;