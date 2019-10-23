const UsersModel = require('../models/Users')
const userModel = new UsersModel();

class Users {
    static get(req, res) {
        const id = req.params.id;
        const userFilter = new UsersModel();
        userFilter.id = id;
        userFilter.email = req.body.email;
        userFilter.password = req.body.password;
        console.log(userFilter);
          
        userModel.get(userFilter)
            .then(user => {
                if (!user.exists) {
                    res.sendStatus(204);
                }
                res.json(user.data());
                console.log('deu certo');
            })
            .catch(err => {
                res
                    .sendStatus(500);
                console.log(err);
                console.error('Erro 500', err);
            });
    };
}

module.exports = Users;