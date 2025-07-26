const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    trim: true
  },
  address: {
    type: String,
    trim: true
  },
  bio: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    trim: true
  },
  status: {
    type: Number,
    default: 1
  },
  slug: {
    type: String,
    unique: true,
    trim: true
  }
}, {
  timestamps: true
});

// Virtual for author books
authorSchema.virtual('books', {
  ref: 'Book',
  localField: '_id',
  foreignField: 'author_id'
});

// Ensure virtual fields are serialized
authorSchema.set('toJSON', { virtuals: true });
authorSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Author', authorSchema); 