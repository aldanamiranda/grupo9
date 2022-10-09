// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.home); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
router.post('/create', productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/productDetail/:id', productsController.productDetail); 

/*** EDIT ONE PRODUCT ***/ 

router.get('/edit/:id', productsController.edit); 
router.put('/edit/id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete (('/delete/:id'), productsController.destroy);


module.exports = router;
