const express = require('express');
const router = express.Router();

const Auth = require('../controllers/Auth')

router.post('/', Auth.post);

module.exports = router;