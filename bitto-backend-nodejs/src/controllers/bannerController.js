const Banner = require('../models/Banner');

exports.list = async (req, res) => {
  const banners = await Banner.find();
  res.json(banners);
};

exports.get = async (req, res) => {
  const banner = await Banner.findById(req.params.id);
  if (!banner) return res.status(404).json({ message: 'Not found' });
  res.json(banner);
};

exports.create = async (req, res) => {
  const banner = new Banner(req.body);
  await banner.save();
  res.status(201).json(banner);
};

exports.update = async (req, res) => {
  const banner = await Banner.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!banner) return res.status(404).json({ message: 'Not found' });
  res.json(banner);
};

exports.delete = async (req, res) => {
  const banner = await Banner.findByIdAndDelete(req.params.id);
  if (!banner) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted' });
}; 