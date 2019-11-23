const BaseModel = require('./BaseModel');

class Products extends BaseModel {
    constructor() {
        super();
    }

    get(id) {
        return this.db
            .collection('products')
            .doc(id)
            .get();
    }

    getAll() {
        return this.db
            .collection('products')
            .get()
    }

    put(id, data) {
        return this.db
            .collection('products')
            .doc(id)
            .set(data);
    }
    
}

module.exports = Products;