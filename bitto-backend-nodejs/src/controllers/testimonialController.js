const Testimonial = require('../models/Testimonial');

// Get all testimonials (for admin)
const list = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ deleted_at: null }).sort({ sort_order: 1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all active testimonials (for frontend)
const getAll = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ 
      status: 1, 
      deleted_at: null 
    }).sort({ sort_order: 1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single testimonial
const get = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create testimonial
const create = async (req, res) => {
  try {
    const testimonial = new Testimonial(req.body);
    const newTestimonial = await testimonial.save();
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update testimonial
const update = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    res.json(testimonial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete testimonial
const deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { deleted_at: new Date() },
      { new: true }
    );
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    res.json({ message: 'Testimonial deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  list,
  getAll,
  get,
  create,
  update,
  delete: deleteTestimonial
}; 