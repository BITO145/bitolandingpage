const express = require('express');
const router = express.Router();
const galleriesImageController = require('../controllers/galleriesImageController');

router.get('/', galleriesImageController.list);
router.get('/:id', galleriesImageController.get);
router.post('/', galleriesImageController.create);
router.put('/:id', galleriesImageController.update);
router.delete('/:id', galleriesImageController.delete);

module.exports = router; 