const express = require('express');
const router = express.Router();
const { uploadSingle, handleUploadError } = require('../middleware/upload');
const uploadController = require('../controllers/uploadController');

router.post('/', uploadSingle, handleUploadError, uploadController.uploadSingle);

module.exports = router; 