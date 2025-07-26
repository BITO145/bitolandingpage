const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  title: {
    type: String,
    trim: true
  },
  sub_title: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  meta_title: {
    type: String,
    trim: true
  },
  meta_keyword: {
    type: String,
    trim: true
  },
  meta_description: {
    type: String,
    trim: true
  },
  slug: {
    type: String,
    trim: true
  },
  is_home: {
    type: Boolean,
    default: false
  },
  status: {
    type: Number,
    default: 1
  },
  image: {
    type: String,
    trim: true
  },
  mysql_id: { type: Number, index: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Mission', missionSchema); 