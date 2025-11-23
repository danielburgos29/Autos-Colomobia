const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    identification: { type: String, required: true },
    contact: { type: String, required: true },
    vehicles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }]
});

module.exports = mongoose.model('User', UserSchema);