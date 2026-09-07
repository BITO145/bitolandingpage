const express = require('express');
const { postForm, getForms, deleteForm } = require('../controllers/formController');

const router = express.Router();

router.post('/', postForm);
router.get('/', getForms);
router.delete('/:id', deleteForm);

module.exports = router;