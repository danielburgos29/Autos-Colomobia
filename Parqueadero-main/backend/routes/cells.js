const express = require('express');
const router = express.Router();
const cellController = require('../controllers/cells');

router.post('/register', cellController.registerCell);
router.put('/update', cellController.updateCell);
router.delete('/delete', cellController.deleteCell);

module.exports = router;