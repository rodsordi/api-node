const express = require('express');
const router = express.Router();

const Products = require('../controllers/Products')

router.get('/:id', Products.get);
router.get('/', Products.getAll);
router.put('/:id', Products.update);

module.exports = router;