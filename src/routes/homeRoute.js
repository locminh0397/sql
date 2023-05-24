const express = require('express');
const middleware = require('./middleware');
const HomeController = require('../controller/HomeController');

const router = express.Router();

// [GET] : http://localhost:3000
router.get('/', middleware.logged, HomeController.show);

// [POST] : http://localhost:3000
router.post('/', middleware.logged, HomeController.show);

module.exports = router;