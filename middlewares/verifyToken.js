const jwt = require('jsonwebtoken');
const { secret } = require('../config/defaut')

module.exports = (request, response, next) => {
    const token = request.headers['x-access-token'];

    if (!token) {
        response
            .status(401)
            .send({
                code: 'not_authorized',
                message: 'Not authorized'
            });
    }

    jwt.verify(token, secret, (error, decoded) => {
        if (error) {
            return response 
                .status(500)
                .send({ error });
        }

        console.log(decoded);

        next();
    });
}