const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema({
    appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    medications: [
        { name: String, dosage: String, frequency: String }
    ],
}, { timestamps: true });

module.exports = mongoose.model('Prescription', prescriptionSchema);