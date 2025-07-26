const Initiatives = require('../models/Initiatives');

exports.list = async (req, res) => {
  const initiatives = await Initiatives.find();
  res.json(initiatives);
};

exports.get = async (req, res) => {
  const initiative = await Initiatives.findById(req.params.id);
  if (!initiative) return res.status(404).json({ message: 'Not found' });
  res.json(initiative);
};

exports.create = async (req, res) => {
  const initiative = new Initiatives(req.body);
  await initiative.save();
  res.status(201).json(initiative);
};

exports.update = async (req, res) => {
  const initiative = await Initiatives.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!initiative) return res.status(404).json({ message: 'Not found' });
  res.json(initiative);
};

exports.delete = async (req, res) => {
  const initiative = await Initiatives.findByIdAndDelete(req.params.id);
  if (!initiative) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted' });
}; 