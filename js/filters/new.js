const URLJSON = "./db/products.json";

$('#new').prepend('<button id="newBtn" class="filter__new">Productos</button>');

$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success") {
        let myProducts = respuesta;
        for (const myProduct of myProducts) {
            $('#new').prepend(`
                <p style="display: none;">${myProduct.name} ${myProduct.collection} ${myProduct.color}</p>
            `);
        }
    }
})

$('#newBtn').click(function() {
    $('#new p').toggle();
});