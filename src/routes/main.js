const mainController = require("../controllers/mainController");

const express = require('express')
const router = express.Router();

router.get ('/', mainController.home);
router.get ('/register', mainController.register)
router.get ('/login', mainController.login)
router.get ('/productCart', mainController.productCart)
router.get ('/productDetail', mainController.productDetail)

module.exports=router;