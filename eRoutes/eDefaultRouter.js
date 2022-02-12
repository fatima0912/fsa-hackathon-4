const express= require('express');
const eDefaultCtrl= require('../eControllers/eDefaultCtrl');
const router= express.Router();

router.get('/',eDefaultCtrl.get);
router.get('/health',eDefaultCtrl.health);

module.exports=router;
