var express = require("express");
var router = express.Router();
var operationsController = require("../controllers/operations.controller");

router.get("/sum", operationsController.sum);
router.get("/substract", operationsController.substract);
router.get("/multiply", operationsController.multiply);
router.get("/divide", operationsController.divide);


module.exports = router;
