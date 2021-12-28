export class Product {
    constructor(id, name, price, collection, category, color, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.collection = collection;
        this.category = category;
        this.color = color;
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