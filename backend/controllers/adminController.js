const User = require('../models/users.js');
const bcrypt = require('bcryptjs');

// @desc    Admin creates a doctor account
exports.createDoctor = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);
        const doc = await User.create({ name, email, password: hashed, role: 'doctor' });
        res.status(201).json(doc);
    } catch (error) {
        next(error);
    }
};

// @desc    List all users (patients, doctors)
exports.listUsers = async (req, res, next) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (error) {
        next(error);
    }
};

// @desc    Delete user by ID
exports.deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted' });
    } catch (error) {
        next(error);
    }
};

