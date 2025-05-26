const Appointment = require('../models/Appointment.js');

// @desc    Book an appointment
exports.bookAppointment = async (req, res, next) => {
    try {
        const { doctorId, date } = req.body;
        const exists = await Appointment.findOne({ doctor: doctorId, date });
        if (exists) return res.status(400).json({ message: 'Slot taken' });

        const appt = await Appointment.create({ patient: req.user._id, doctor: doctorId, date });
        res.status(201).json(appt);
    } catch (error) {
        next(error);
    }
};

// @desc    Get user's appointments
exports.getAppointments = async (req, res, next) => {
    try {
        const appts = await Appointment.find({ patient: req.user._id }).populate('doctor', 'name email');
        res.json(appts);
    } catch (error) {
        next(error);
    }
};
