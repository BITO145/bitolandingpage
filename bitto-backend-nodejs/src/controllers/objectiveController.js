const Objective = require('../models/Objective');

exports.list = async (req, res) => {
  const objectives = await Objective.find();
  res.json(objectives);
};

exports.get = async (req, res) => {
  const objective = await Objective.findById(req.params.id);
  if (!objective) return res.status(404).json({ message: 'Not found' });
  res.json(objective);
};

exports.create = async (req, res) => {
  const objective = new Objective(req.body);
  await objective.save();
  res.status(201).json(objective);
};

exports.update = async (req, res) => {
  const objective = await Objective.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!objective) return res.status(404).json({ message: 'Not found' });
  res.json(objective);
};

exports.delete = async (req, res) => {
  const objective = await Objective.findByIdAndDelete(req.params.id);
  if (!objective) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted' });
}; 