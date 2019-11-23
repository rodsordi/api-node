const jwt = require('jsonwebtoken');
const { secret } = require('../config/defaut')

module.exports = (data, expiresIn = (12 * 60 * 60 * 1000)) =>
    jwt.sign(
        data,
        secret,
        { expiresIn }
    );