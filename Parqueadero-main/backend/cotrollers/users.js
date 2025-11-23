const User = require('../models/User');

// Register user
exports.registerUser = async (req, res) => {
    try {
        const { name, identification, contact } = req.body;
        const user = new User({ name, identification, contact });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update user
exports.updateUser = async (req, res) => {
    try {
        const { userId, name, identification, contact } = req.body;
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ msg: 'User not found' });

        user.name = name || user.name;
        user.identification = identification || user.identification;
        user.contact = contact || user.contact;
        await user.save();

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete user
exports.deleteUser = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await User.findByIdAndDelete(userId);
        if (!user) return res.status(404).json({ msg: 'User not found' });

        res.status(200).json({ msg: 'User deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};