const GalleriesImage = require('../models/GalleriesImage');

exports.list = async (req, res) => {
  const images = await GalleriesImage.find();
  res.json(images);
};

exports.get = async (req, res) => {
  const image = await GalleriesImage.findById(req.params.id);
  if (!image) return res.status(404).json({ message: 'Not found' });
  res.json(image);
};

exports.create = async (req, res) => {
  const image = new GalleriesImage(req.body);
  await image.save();
  res.status(201).json(image);
};

exports.update = async (req, res) => {
  const image = await GalleriesImage.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!image) return res.status(404).json({ message: 'Not found' });
  res.json(image);
};

exports.delete = async (req, res) => {
  const image = await GalleriesImage.findByIdAndDelete(req.params.id);
  if (!image) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted' });
}; 