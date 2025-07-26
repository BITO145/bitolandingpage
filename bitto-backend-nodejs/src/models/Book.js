const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  book_name: {
    type: String,
    required: true,
    trim: true
  },
  author_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  },
  sort_description: {
    type: String,
    trim: true
  },
  about_book: {
    type: String,
    trim: true
  },
  isbn_no: {
    type: String,
    trim: true
  },
  reading_age: {
    type: String,
    trim: true
  },
  language: {
    type: String,
    trim: true
  },
  item_weight: {
    type: String,
    trim: true
  },
  dimensions: {
    type: String,
    trim: true
  },
  paperback: {
    type: String,
    trim: true
  },
  origin_country: {
    type: String,
    trim: true
  },
  is_new_release: {
    type: Boolean,
    default: false
  },
  is_best_seller: {
    type: Boolean,
    default: false
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

// Virtual for book images
bookSchema.virtual('images', {
  ref: 'BookImage',
  localField: '_id',
  foreignField: 'book_id'
});

// Ensure virtual fields are serialized
bookSchema.set('toJSON', { virtuals: true });
bookSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Book', bookSchema); 