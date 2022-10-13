// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer= require('multer');
const path= require('path');

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

//config de multer
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/products')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
let upload = multer({ storage: storage })

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.home); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
router.post('/create', upload.any(), productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/productDetail/:id', productsController.productDetail); 

/*** EDIT ONE PRODUCT ***/ 

router.get('/edit/:id', productsController.edit); 
router.put('/edit/id', upload.any(), productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete ('/delete/:id', productsController.destroy);


module.exports = router;
