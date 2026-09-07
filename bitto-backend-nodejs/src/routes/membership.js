const express = require('express');
const router = express.Router();
const membershipController = require('../controllers/membershipController');
const { adminAuth } = require('../middleware/auth');

// Public routes
router.post('/submit', membershipController.submitMembership);

// Admin routes (protected)
router.get('/admin/all', adminAuth, membershipController.getAllMemberships);
router.get('/admin/:id', adminAuth, membershipController.getMembershipById);
router.put('/admin/:id/status', adminAuth, membershipController.updateMembershipStatus);
router.delete('/admin/:id', adminAuth, membershipController.deleteMembership);

module.exports = router; 