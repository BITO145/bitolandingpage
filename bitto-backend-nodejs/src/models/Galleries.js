const mongoose = require('mongoose');

const galleriesSchema = new mongoose.Schema({
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

// Virtual for gallery images
galleriesSchema.virtual('images', {
  ref: 'GalleriesImage',
  localField: '_id',
  foreignField: 'gallery_id'
});

// Ensure virtual fields are serialized
galleriesSchema.set('toJSON', { virtuals: true });
galleriesSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Galleries', galleriesSchema); 