const express = require('express');
const router = express.Router();
const missionController = require('../controllers/missionController');

router.get('/', missionController.list);
router.get('/:id', missionController.get);
router.post('/', missionController.create);
router.put('/:id', missionController.update);
router.delete('/:id', missionController.delete);

module.exports = router; 