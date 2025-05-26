const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { createDoctor, listUsers, deleteUser } = require('../controllers/adminController');

router.use(protect);
router.post('/doctors', createDoctor);
router.get('/users', listUsers);
router.delete('/users/:id', deleteUser);

module.exports = router;
