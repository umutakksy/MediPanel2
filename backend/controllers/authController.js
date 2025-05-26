const User = require('../models/users.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @desc    Register new user (patient)
exports.register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const existing = await User.findOne({ email });
        if (existing) return res.status(400).json({ message: 'Email already in use' });

        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);

        const user = await User.create({ name, email, password: hashed });
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.status(201).json({ token });
    } catch (error) {
        next(error);
    }
};

// @desc    Login user
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ message: 'Invalid credentials' });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.json({ token });
    } catch (error) {
        next(error);
    }
};

// @desc    Get logged in user profile
exports.getProfile = async (req, res, next) => {
    res.json(req.user);
};