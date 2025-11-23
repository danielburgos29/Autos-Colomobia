const Vehicle = require('../models/Vehicle');
const Cell = require('../models/Cell');

// Register vehicle entry
exports.registerEntry = async (req, res) => {
    try {
        const { plate, type, userId } = req.body;
        const cell = await Cell.findOneAndUpdate({ status: 'available' }, { status: 'occupied' });
        if (!cell) return res.status(400).json({ msg: 'No available cells' });

        const vehicle = new Vehicle({ plate, type, user: userId, cell: cell._id });
        await vehicle.save();

        res.status(201).json(vehicle);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Register vehicle exit
exports.registerExit = async (req, res) => {
    try {
        const { vehicleId } = req.body;
        const vehicle = await Vehicle.findById(vehicleId);
        if (!vehicle) return res.status(404).json({ msg: 'Vehicle not found' });

        vehicle.exitTime = Date.now();
        vehicle.status = 'exited';
        await vehicle.save();

        const cell = await Cell.findById(vehicle.cell);
        cell.status = 'available';
        await cell.save();

        res.status(200).json(vehicle);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};