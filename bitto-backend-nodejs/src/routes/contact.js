const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const { adminAuth } = require('../middleware/auth');

// Public routes
router.post('/submit', contactController.contact);

// Admin routes (protected)
router.get('/admin/all', adminAuth, contactController.getAllContacts);
router.get('/admin/:id', adminAuth, contactController.getContactById);
router.put('/admin/:id/status', adminAuth, contactController.updateContactStatus);
router.delete('/admin/:id', adminAuth, contactController.deleteContact);

module.exports = router; 