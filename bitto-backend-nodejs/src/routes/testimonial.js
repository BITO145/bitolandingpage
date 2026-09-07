const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testimonialController');
const { auth } = require('../middleware/auth');

// Public routes (for frontend)
router.get('/', testimonialController.getAll);
router.get('/:id', testimonialController.get);

// Protected routes (for admin)
router.get('/admin/list', auth, testimonialController.list);
router.post('/', auth, testimonialController.create);
router.put('/:id', auth, testimonialController.update);
router.delete('/:id', auth, testimonialController.delete);

module.exports = router; 