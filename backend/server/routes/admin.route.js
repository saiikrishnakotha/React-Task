var express = require('express');
var router = express.Router();

var AdminController = require('../controllers/admin.controller');



router.post('/addProducts',AdminController.addProduct);
router.put('/updateProduct/:productId',AdminController.updateProduct);
router.delete('/deleteProduct/:productId',AdminController.deleteProduct);
router.get('/listProducts',AdminController.listProducts);
router.get('/listProductById/:productId',AdminController.listProductById);


module.exports=router;
