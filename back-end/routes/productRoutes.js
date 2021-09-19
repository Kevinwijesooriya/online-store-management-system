const express =  require('express');
const router = require('./items');
const router = express.Router();

const { getProductById } = require('../controller/productControllers');

router.get('/:id', getProductById)

module.exports = router;