const express = require('express');
const middleware = require('./middleware');
const LoginController = require('../controller/LoginController');

const router = express.Router();

// [GET] : http://localhost:3000/login
router.get('/', LoginController.show);

// [POST] : http://localhost:3000/login
router.post('/', LoginController.checkLogin);

module.exports = router;