const express = require('express');
const eProductsCtrl = require('../eControllers/eProductsCtrl');
const fs = require('fs');
const multer = require('multer');
const req = require('express/lib/request');
//const tokenAuth = require('../middleware/tokenAuth');
//const { getSellerByEmail } = require('../eRpositiories/eProductsRepository');

const router = express.Router();

const dir = './uploads';
if(!fs.existsSync(dir)) fs.mkdirSync(dir);

const storage = multer.diskStorage({
    destination : './uploads',
    filename : function (req, file, cb) {
        const uniqueToken = Date.now() + '-' + Math.round(Math.random()* 1E9);
        const fileName = uniqueToken + '-' + file.originalname;
        req.image = fileName;
        cb(null,fileName);
    }
});

const upload = multer({storage:storage});

router.post('/products',eProductsCtrl.addList);
router.get('/productlist',eProductsCtrl.getProducts);
router.delete('/:model',eProductsCtrl.deleteProducts);
router.put('/:model', upload.single('image'), eProductsCtrl.updateProduct);
 
module.exports = router;
//router.get('/:email',eProductsCtrl.getSellerByEmail);