var express = require('express');
var router = express.Router();
var paymentController = require('../controllers/payment.controller');
var middleware = require('../middleware');


//router.use(middleware);

//Usamos las funciones que creamos en el controlador de payment.
router.get('/promos', paymentController.getPromos);
router.get('/create', paymentController.create);
router.post('/applydiscount',paymentController.applyDiscount);

module.exports = router;
