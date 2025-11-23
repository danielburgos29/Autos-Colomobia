const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.post('/register', userController.registerUser);
router.put('/update', userController.updateUser);
router.delete('/delete', userController.deleteUser);

module.exports = router;