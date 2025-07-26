const express = require('express');
const router = express.Router();
const initiativesController = require('../controllers/initiativesController');

router.get('/', initiativesController.list);
router.get('/:id', initiativesController.get);
router.post('/', initiativesController.create);
router.put('/:id', initiativesController.update);
router.delete('/:id', initiativesController.delete);

module.exports = router; 