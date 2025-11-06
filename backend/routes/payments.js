const express = require('express');
const { createPayment, getPaymentsByUserId } = require('../controllers/payments');
const auth = require('../middleware/auth');


const router = express.Router();

// Rutas de pagos
router.post('/', auth, createPayment);
router.get('/user/:userId', getPaymentsByUserId);

module.exports = router;