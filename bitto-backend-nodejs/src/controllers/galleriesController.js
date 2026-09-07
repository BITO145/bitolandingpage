const Galleries = require('../models/Galleries');

exports.list = async (req, res) => {
  const galleries = await Galleries.find();
  res.json(galleries);
};

exports.get = async (req, res) => {
  const gallery = await Galleries.findById(req.params.id);
  if (!gallery) return res.status(404).json({ message: 'Not found' });
  res.json(gallery);
};

exports.create = async (req, res) => {
  const gallery = new Galleries(req.body);
  await gallery.save();
  res.status(201).json(gallery);
};

exports.update = async (req, res) => {
  const gallery = await Galleries.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!gallery) return res.status(404).json({ message: 'Not found' });
  res.json(gallery);
};

exports.delete = async (req, res) => {
  const gallery = await Galleries.findByIdAndDelete(req.params.id);
  if (!gallery) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted' });
}; 