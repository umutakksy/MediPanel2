const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { getTodayAppointments, writePrescription, writeTestResults } = require('../controllers/doctorController');

router.use(protect);
router.get('/appointments/today', getTodayAppointments);
router.post('/prescriptions', writePrescription);
router.post('/tests', writeTestResults);

module.exports = router;
