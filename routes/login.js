const express = require('express');
const router = express.Router();

let login = require('../controllers/login');

router.get('/', login.login);

module.exports = router;