const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicles');

router.post('/entry', vehicleController.registerEntry);
router.post('/exit', vehicleController.registerExit);

module.exports = router;