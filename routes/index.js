const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const headerController = require('../controllers/headerController');

router.get('/', homeController.index);

router.get('/header', headerController.header);

module.exports = router;
