const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { bookAppointment, getAppointments } = require('../controllers/patientController');

router.use(protect);
router.post('/appointments', bookAppointment);
router.get('/appointments', getAppointments);

module.exports = router;