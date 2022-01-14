const display = (products, element) => {
    // mostrar elementos
    element.innerHTML = products.map((product) => {
        const {id, name, price, collection, color} = product;
        return `
            <div class="card">
                <div class="overlay__item">
                    <img src="./assets/img/tienda/${name}-${collection}-${color}.jpg" alt="${name} ${collection} Color ${color}">
                    <div class="overlay__content">
                        <div class="white-button">
                            <a href="producto.html?id=${id}">Ver más</a>
                            <button data-id="${id}">Comprar</button>
                        </div>
                    </div>
                </div>
                <div class="card__detail">
                    <h4>${color}</h4>
                    <h3><a href="#">${name} ${collection}</a></h3>
                    <p>$${price}</p>
                </div>
            </div>
        `;
    })
    .join('');
};

export default display;