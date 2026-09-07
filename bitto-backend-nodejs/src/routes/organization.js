const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/organizationController');

router.get('/', organizationController.list);
router.get('/:id', organizationController.get);
router.post('/', organizationController.create);
router.put('/:id', organizationController.update);
router.delete('/:id', organizationController.delete);

module.exports = router; 