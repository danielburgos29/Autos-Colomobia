const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
    plate: { type: String, required: true },
    type: { type: String, required: true },
    entryTime: { type: Date, default: Date.now },
    exitTime: { type: Date },
    cell: { type: mongoose.Schema.Types.ObjectId, ref: 'Cell' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['entered', 'exited'], default: 'entered' },
    notes: { type: String }
});

module.exports = mongoose.model('Vehicle', VehicleSchema);