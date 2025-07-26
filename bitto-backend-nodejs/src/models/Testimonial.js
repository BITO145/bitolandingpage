const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  mysql_id: { type: Number, index: true },
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  sort_description: { type: String, required: true },
  image: { type: String, required: true },
  post_by: { type: String, required: true },
  description: { type: String, required: true },
  sort_order: { type: Number, default: 1 },
  status: { type: Number, default: 1 },
  long_description: { type: String },
  deleted_at: { type: Date, default: null }
}, {
  timestamps: true
});

module.exports = mongoose.model('Testimonial', testimonialSchema); 