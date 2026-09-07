const express = require('express');
const router = express.Router();
const bodiesController = require('../controllers/bodiesController');

router.get('/', bodiesController.list);
router.get('/:id', bodiesController.get);
router.post('/', bodiesController.create);
router.put('/:id', bodiesController.update);
router.delete('/:id', bodiesController.delete);

module.exports = router; 