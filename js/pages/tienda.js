// IMPORTS GLOBALES //
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

// IMPORTS ESPECIFICOS //
import { store } from '../store.js';
import display from '../displayProducts.js';

// IMPORTS FILTROS //
import setupCategories from '../filters/categories.js';
import setupColors from '../filters/color.js';
import setupPrice from '../filters/price.js';
import setupSearch from '../filters/search.js';
import setupSort from '../filters/sort.js';

const spa = document.getElementById('spa');
//const loading = document.getElementById('spinner');


const renderCollection = () => {
    const storeSection = document.createElement('section');
    storeSection.classList.add('store');
    storeSection.innerHTML = `
        <section class="classification">
            <h1>Colección</h1>
            <div class="classification__elements">
                <div id="products-quantity" class="quantity">
                    <!-- cantidad renderizada -->
                </div>
                <div>
                    <label>Ordenar por</label>
                    <select id="sort">
                        <option value="Más relevantes">Más relevantes</option>
                        <option value="A - Z">A - Z</option>
                        <option value="Z - A">Z - A</option>
                        <option value="Menor precio">Menor precio</option>
                        <option value="Mayor precio">Mayor precio</option>
                    </select>
                </div>
            </div>
        </section>
        <section class="store__content">
            <aside class="filter">
                <form id="search-form">
                    <input id="search-input" type="text" placeholder="Buscar..."/>
                </form>
                <div class="filter__type">
                    <span>Categoría</span>
                    <div id="categories" class="filter__category">
                        <!-- categorias renderizadas -->
                    </div>
                </div>
                <div class="filter__type">
                    <span>Color</span>
                    <div id="colors" class="filter__color">
                        <!-- colores renderizadas -->
                    </div>
                </div>
                <div class="filter__type">
                    <span>Precio</span>
                    <form class="filter__price">
                        <input id="price-input" type="range" min="0" value="500" max="2000"/>
                        <p id="price-value">
                            <!-- valor renderizado -->
                        </p>
                    </form>
                </div>
                <div id="new" class="filter__type">
                        <!-- colores renderizadas -->
                    </div>
                </div>
            </aside>
            <section id="collection">
                <!-- productos renderizados -->
            </section>
        </section>
        <!-- <div id="spinner" class="loading">
            <div class="loader"></div>
        </div> -->
    `;
    spa.appendChild(storeSection);
    
    
    display(store, document.getElementById('collection'));
    
    setupCategories(store);
    setupColors(store);
    setupPrice(store);
    setupSearch(store);
    setupSort(store);

    
};

//loading.style.display = 'none';

export default renderCollection;