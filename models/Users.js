const BaseModel = require('./BaseModel');

class Users extends BaseModel {
    constructor() {
        super();
    }

    get(user) {
        const collection = this.db.collection('users');
        if (user.email)
            collection.where("email", "==", user.email);
        if (user.password)
            collection.where("password", "==", user.password);
        return collection.get();
    }
}

module.exports = Users;