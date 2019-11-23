const express = require('express');
const verifyToken = require('../middlewares/verifyToken');

const users = require('./users');
const products = require('./products');
const auth = require('./auth')
const router = express.Router();

router.use('/users', verifyToken, users);
router.use('/products', verifyToken, products);
router.use('/auth', auth);

module.exports = router;