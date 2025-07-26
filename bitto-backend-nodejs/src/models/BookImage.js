const mongoose = require('mongoose');

const bookImageSchema = new mongoose.Schema({
  book_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
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
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('BookImage', bookImageSchema); 