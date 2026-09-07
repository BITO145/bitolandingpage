const express = require('express');
const router = express.Router();
const objectiveController = require('../controllers/objectiveController');

router.get('/', objectiveController.list);
router.get('/:id', objectiveController.get);
router.post('/', objectiveController.create);
router.put('/:id', objectiveController.update);
router.delete('/:id', objectiveController.delete);

module.exports = router; 