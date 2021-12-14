export class Cart {
    constructor() {
        this.list = JSON.parse(localStorage.getItem("cart")) || [];
    }

    listItems() {
        // mostrar todos los items del carrito (devolviendo this.list)
        return this.list;
    }

    addItem (item) {
        // agregar un nuevo item (agregar item a this.list)
        this.list.push(item)
        localStorage.setItem("cart", JSON.stringify(this.list))
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
        localStorage.setItem("cart", JSON.stringify(this.list))
        // itemUpdated seria un nuevo objeto
        // this.list[index] = itemUpdated;
        // this.list[index].id = itemId;
    }

    deleteItem(itemId) {
        // eliminar item (encontrar item en this.list y eliminarlo)
        const item = this.findItem(itemId)
        const index = this.list.indexOf(item)
        this.list.splice(index,1)
        localStorage.setItem("cart", JSON.stringify(this.list))
    }
}