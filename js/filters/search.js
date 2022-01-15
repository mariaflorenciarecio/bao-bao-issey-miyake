import display from "../displayProducts.js";


const setupSearch = (store) => {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    searchForm.addEventListener('keyup', function() {
        const value = searchInput.value;
        if(value) {
            const newStore = store.filter((product) => {
                let {name} = product;
                name = name.toLowerCase();
                if(name.startsWith(value)) {
                    return product
                }
            });
            display(newStore, document.getElementById('collection'))
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
            display(store, document.getElementById('collection'));
        }
    });
};

export default setupSearch;