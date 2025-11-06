const Cell = require('../models/Cell');

// Register cell
exports.registerCell = async (req, res) => {
    try {
        const { number, type } = req.body;
        const cell = new Cell({ number, type });
        await cell.save();
        res.status(201).json(cell);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update cell
exports.updateCell = async (req, res) => {
    try {
        const { cellId, number, type, status } = req.body;
        const cell = await Cell.findById(cellId);
        if (!cell) return res.status(404).json({ msg: 'Cell not found' });

        cell.number = number || cell.number;
        cell.type = type || cell.type;
        cell.status = status || cell.status;
        await cell.save();

        res.status(200).json(cell);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete cell
exports.deleteCell = async (req, res) => {
    try {
        const { cellId } = req.body;
        const cell = await Cell.findByIdAndDelete(cellId);
        if (!cell) return res.status(404).json({ msg: 'Cell not found' });

        res.status(200).json({ msg: 'Cell deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};