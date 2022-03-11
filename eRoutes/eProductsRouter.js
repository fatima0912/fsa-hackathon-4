const express = require('express');
const eProductsCtrl = require('../eControllers/eProductsCtrl');

const router = express.Router();

router.post('/products',eProductsCtrl.addList);
router.get('/productlist',eProductsCtrl.getProducts);
router.delete('/:model',eProductsCtrl.deleteProducts);
router.put('/:model', eProductsCtrl.updateProduct);
module.exports = router;