const mongoose = require('mongoose');

const CellSchema = new mongoose.Schema({
    number: { type: String, required: true },
    type: { type: String, required: true },
    status: { type: String, enum: ['available', 'occupied'], default: 'available' }
});

module.exports = mongoose.model('Cell', CellSchema);