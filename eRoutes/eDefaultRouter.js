const express= require('express');
const eDefaultCtrl= require('../eControllers/eDefaultCtrl');
const router= express.Router();

router.get('/ecom',eDefaultCtrl.get);
router.get('/health',eDefaultCtrl.health);

module.exports = router;
