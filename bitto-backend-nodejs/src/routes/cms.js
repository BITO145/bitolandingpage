const express = require('express');
const router = express.Router();
const cmsController = require('../controllers/cmsController');

router.get('/', cmsController.list);
router.get('/:id', cmsController.get);
router.post('/', cmsController.create);
router.put('/:id', cmsController.update);
router.delete('/:id', cmsController.delete);

module.exports = router; 