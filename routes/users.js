const express = require('express');
const router = express.Router();

const Users = require('../controllers/Users')

router.get('/:id', Users.get);
router.get('/', Users.getAll);
router.put('/:id', Users.update);

module.exports = router;