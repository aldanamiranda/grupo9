const mainController = require("../controllers/mainController")
;

const express = require('express')
const router = express.Router();

router.get ('/', mainController.home);
router.get ('/search', mainController.search)

//router.get ('/register', mainController.register)
//router.get ('/login', mainController.login)
//router.get ('/productCart', mainController.productCart)
//router.get ('/productDetail', mainController.productDetail)
//router.get ('/products', mainController.products)

module.exports=router;