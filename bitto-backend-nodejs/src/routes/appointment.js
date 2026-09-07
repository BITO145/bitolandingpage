const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const { adminAuth } = require('../middleware/auth');

// Public routes
router.post('/submit', appointmentController.createAppointment);
router.get('/available-slots', appointmentController.getAvailableTimeSlots);

// Admin routes (protected)
router.get('/admin/all', adminAuth, appointmentController.getAllAppointments);
router.get('/admin/:id', adminAuth, appointmentController.getAppointmentById);
router.put('/admin/:id/status', adminAuth, appointmentController.updateAppointmentStatus);
router.delete('/admin/:id', adminAuth, appointmentController.deleteAppointment);

module.exports = router; 