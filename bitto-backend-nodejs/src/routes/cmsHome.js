const express = require('express');
const router = express.Router();
const cmsHomeController = require('../controllers/cmsHomeController');
const { adminAuth } = require('../middleware/auth');

// Public: Get homepage content
router.get('/home', cmsHomeController.getHome);

// Admin: Update homepage content
router.put('/home', adminAuth, cmsHomeController.updateHome);

module.exports = router; 