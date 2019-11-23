const BaseModel = require('./BaseModel');

class Users extends BaseModel {
    constructor() {
        super();
    }

    get(id) {
        return this.db
            .collection('users')
            .doc(id)
            .get();
    }

    getAll() {
        return this.db
            .collection('users')
            .get()
    }

    put(id, data) {
        return this.db
            .collection('users')
            .doc(id)
            .set(data);
    }
    
}

module.exports = Users;