const mongoose = require('mongoose');

const galleriesImageSchema = new mongoose.Schema({
  gallery_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Galleries',
    required: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  },
  sort_order: {
    type: Number,
    default: 0
  },
  mysql_id: { type: Number, index: true },
  mysql_gallery_id: { type: Number, index: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('GalleriesImage', galleriesImageSchema); 