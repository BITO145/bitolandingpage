const express = require('express');
const router = express.Router();
const chapterController = require('../controllers/chapterController');

router.get('/', chapterController.list);
router.get('/:id', chapterController.get);
router.post('/', chapterController.create);
router.put('/:id', chapterController.update);
router.delete('/:id', chapterController.delete);

module.exports = router; 