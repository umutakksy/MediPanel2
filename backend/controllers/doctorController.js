const Appointment = require('../models/Appointment.js');
const Prescription = require('../models/Prescription.js');
const TestResult = require('../models/TestResult.js');

// @desc    Get today's appointments for doctor
exports.getTodayAppointments = async (req, res, next) => {
    try {
        const start = new Date(); start.setHours(0,0,0,0);
        const end = new Date(); end.setHours(23,59,59,999);
        const appts = await Appointment.find({ doctor: req.user._id, date: { $gte: start, $lte: end } })
            .populate('patient', 'name email');
        res.json(appts);
    } catch (error) {
        next(error);
    }
};

// @desc    Write a prescription
exports.writePrescription = async (req, res, next) => {
    try {
        const pres = await Prescription.create({
            appointment: req.body.appointmentId,
            doctor: req.user._id,
            patient: req.body.patientId,
            medications: req.body.medications,
        });
        res.status(201).json(pres);
    } catch (error) {
        next(error);
    }
};

// @desc    Write test results
exports.writeTestResults = async (req, res, next) => {
    try {
        const test = await TestResult.create({
            appointment: req.body.appointmentId,
            doctor: req.user._id,
            patient: req.body.patientId,
            tests: req.body.tests,
        });
        res.status(201).json(test);
    } catch (error) {
        next(error);
    }
};
