const express = require('express');
const router = express.Router();
const actionPointsController = require('../controllers/actionPointsController');

router.get('/', actionPointsController.list);
router.get('/:id', actionPointsController.get);
router.post('/', actionPointsController.create);
router.put('/:id', actionPointsController.update);
router.delete('/:id', actionPointsController.delete);

module.exports = router; 