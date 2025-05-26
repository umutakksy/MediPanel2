const mongoose = require("mongoose");

const testResultSchema = new mongoose.Schema({
    appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tests: [
        { name: String, result: String, notes: String }
    ],
}, { timestamps: true });

module.exports = mongoose.model('TestResult', testResultSchema);
