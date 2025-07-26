const ActionPoints = require('../models/ActionPoints');

exports.list = async (req, res) => {
  const actionpoints = await ActionPoints.find();
  res.json(actionpoints);
};

exports.get = async (req, res) => {
  const actionpoint = await ActionPoints.findById(req.params.id);
  if (!actionpoint) return res.status(404).json({ message: 'Not found' });
  res.json(actionpoint);
};

exports.create = async (req, res) => {
  const actionpoint = new ActionPoints(req.body);
  await actionpoint.save();
  res.status(201).json(actionpoint);
};

exports.update = async (req, res) => {
  const actionpoint = await ActionPoints.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!actionpoint) return res.status(404).json({ message: 'Not found' });
  res.json(actionpoint);
};

exports.delete = async (req, res) => {
  const actionpoint = await ActionPoints.findByIdAndDelete(req.params.id);
  if (!actionpoint) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted' });
}; 