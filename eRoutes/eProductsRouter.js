const express=require('express');
const eProductsCtrl=require('../eControllers/eProductsCtrl');

const router=express.Router();
router.post('/products',eProductsCtrl.addList);
router.get('/get',eProductsCtrl.getProducts);
module.exports=router;