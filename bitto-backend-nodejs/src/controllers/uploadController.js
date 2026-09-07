const path = require('path');

exports.uploadSingle = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ status: false, message: 'No file uploaded', data: [] });
  }
  const fileUrl = `/uploads/${path.basename(req.file.path)}`;
  res.json({ status: true, url: fileUrl, filename: req.file.filename });
}; 