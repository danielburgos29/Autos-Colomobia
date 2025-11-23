const Payment = require('../models/Payment');

exports.createPayment = async (req, res) => {
    const { userId, amount, paymentMethod } = req.body;

    try {
        const newPayment = new Payment({
            userId,
            amount,
            paymentMethod
        });

        const savedPayment = await newPayment.save();
        res.status(201).json(savedPayment);
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el pago', error });
    }
};

exports.getPaymentsByUserId = async (req, res) => {
    const { userId } = req.params;

    try {
        const payments = await Payment.find({ userId });
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los pagos', error });
    }
};