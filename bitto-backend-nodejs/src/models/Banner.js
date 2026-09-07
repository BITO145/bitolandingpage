const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true
  },
  subtitle: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  },
  link: {
    type: String,
    trim: true
  },
  status: {
    type: Number,
    default: 1
  },
  sort_order: {
    type: Number,
    default: 0
  },
  mysql_id: { type: Number, index: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Banner', bannerSchema); 