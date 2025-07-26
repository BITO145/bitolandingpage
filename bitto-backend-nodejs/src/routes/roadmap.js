const express = require('express');
const router = express.Router();
const roadmapController = require('../controllers/roadmapController');

router.get('/', roadmapController.list);
router.get('/:id', roadmapController.get);
router.post('/', roadmapController.create);
router.put('/:id', roadmapController.update);
router.delete('/:id', roadmapController.delete);

module.exports = router; 