const cacheManager = require('cache-manager');
const { cache } = require('../config/defaut')
const memoryCache = cacheManager.caching(cache);

const UsersModel = require('../models/Users')
const userModel = new UsersModel();

class Users {
    static get(req, res) {
        const id = req.params.id;
        const key = `user_${id}`;
        memoryCache.get(key, (err, result) => {
            if (result)
                return res.json(result);

            userModel.get(id)
                .then(user => {
                    if (!user.exists)
                        return res.sendStatus(204)

                    const userData = user.data();
                    memoryCache.set(key, userData);
                    res.json(userData);
                })
                .catch(err => {
                    res.sendStatus(500);
                    console.log(err);
                })
        })
    };

    static getAll(req, res) {
        const id = req.params.id;
        userModel.getAll()
            .then(users => {
                res.json(users.docs.map(user => ({
                    id: user.id,
                    ...user.data(),
                })));
            })
            .catch(err => {
                res.sendStatus(500);
                console.log(err);
            })
    }

    static update(req, res) {
        const id = req.params.id;        
        const data = {
            'email': req.body.email,
            'password': req.body.password,
            'name': req.body.name,
        }
        userModel.put(id, data)
            .then(data => {
                res.sendStatus(200);
            })
            .catch(err => {
                res.sendStatus(500);
                console.log(err);
            })
    }
}

module.exports = Users;