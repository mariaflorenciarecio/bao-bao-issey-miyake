class Cart {
    constructor(list) {
        this.list = list;
    }

    listItems() {
        // mostrar todos los items del carrito (devolviendo this.list)
        return this.list;
    }

    addItem (item) {
        // agregar un nuevo item (agregar item a this.list)
        this.list.push(item)
    }

    findItem (itemId) {
        // mostrar item por id (encontrar item en this.list y devolverlo)
        const item = this.list.find(element => element.id === itemId)

        if (!item) {
            throw new Error("No existe el item id: " + itemId)
        }

        return item;
    }

    updateItem(itemId, quantity) {
        // actualizar item a itemUpdated (encontrar item en this.list y actualizarlo con itemUpdated)
        const item = this.findItem(itemId)
        const index = this.list.indexOf(item)
        this.list[index].quantity = quantity;
        if(quantity <= 0) {
            this.list[index].stock = false
        }
        // itemUpdated seria un nuevo objeto
        // this.list[index] = itemUpdated;
        // this.list[index].id = itemId;
    }

    deleteItem(itemId) {
        // eliminar item (encontrar item en this.list y eliminarlo)
        const item = this.findItem(itemId)
        const index = this.list.indexOf(item)
        this.list.splice(index,1)
    }
}

class Product {
    constructor(id, name, price, quantity, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.stock = stock;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    soldOut() {
        this.stock = false;
    }
}

const product1 = new Product(1, "Cartera Tote", 200.000, 10, true)
const product2 = new Product(2, "Cartera Crossbody", 150.000, 30, true)
const product3 = new Product(3, "Cartera Clutch", 100.000, 70, true)
const product4 = new Product(4, "Cartera Pouch", 100.000, 100, true)
const product5 = new Product(5, "Cartera Backpack", 200.000, 20, true)

// opcion 1 (crear a partir de un array inicial)
// const cart = new Cart([product1, product2, product3, product4, product5])

// opcion 2 (crear con un array vacio)
const cart = new Cart([])
cart.addItem(product1)
cart.addItem(product2)
cart.addItem(product3)
cart.addItem(product4)
cart.addItem(product5)

// mostrar todos los items del carrito
console.log(cart.listItems())

// agregar un nuevo item
const product6 = new Product(6, "Billetera", 50.000, 90, true)
cart.addItem(product6)
console.log(cart.listItems())

// mostrar item por id
console.log(cart.findItem(3))

// eliminar item por id
cart.deleteItem(3)
console.log(cart.listItems())

// actualizar item por id (cantidad)
// const updatedItem = new Product (null, "Cartera Tote", 200.000, 90, true)
// cart.updateItem(1, 90)
// console.log(cart.listItems())
cart.updateItem(1, 100)
cart.updateItem(2, 100)
cart.updateItem(5, 100)
cart.updateItem(6, 0)
console.log(cart.listItems())