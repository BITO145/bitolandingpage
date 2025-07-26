const Bodies = require('../models/Bodies');

exports.list = async (req, res) => {
  const bodies = await Bodies.find();
  res.json(bodies);
};

exports.get = async (req, res) => {
  const body = await Bodies.findById(req.params.id);
  if (!body) return res.status(404).json({ message: 'Not found' });
  res.json(body);
};

exports.create = async (req, res) => {
  const body = new Bodies(req.body);
  await body.save();
  res.status(201).json(body);
};

exports.update = async (req, res) => {
  const body = await Bodies.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!body) return res.status(404).json({ message: 'Not found' });
  res.json(body);
};

exports.delete = async (req, res) => {
  const body = await Bodies.findByIdAndDelete(req.params.id);
  if (!body) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted' });
}; 