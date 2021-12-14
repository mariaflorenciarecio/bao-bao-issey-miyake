export class Product {
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