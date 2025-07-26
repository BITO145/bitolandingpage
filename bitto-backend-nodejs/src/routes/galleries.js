const express = require('express');
const router = express.Router();
const galleriesController = require('../controllers/galleriesController');

router.get('/', galleriesController.list);
router.get('/:id', galleriesController.get);
router.post('/', galleriesController.create);
router.put('/:id', galleriesController.update);
router.delete('/:id', galleriesController.delete);

module.exports = router; 