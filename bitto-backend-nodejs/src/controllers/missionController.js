const Mission = require('../models/Mission');

exports.list = async (req, res) => {
  const missions = await Mission.find();
  res.json(missions);
};

exports.get = async (req, res) => {
  const mission = await Mission.findById(req.params.id);
  if (!mission) return res.status(404).json({ message: 'Not found' });
  res.json(mission);
};

exports.create = async (req, res) => {
  const mission = new Mission(req.body);
  await mission.save();
  res.status(201).json(mission);
};

exports.update = async (req, res) => {
  const mission = await Mission.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!mission) return res.status(404).json({ message: 'Not found' });
  res.json(mission);
};

exports.delete = async (req, res) => {
  const mission = await Mission.findByIdAndDelete(req.params.id);
  if (!mission) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted' });
}; 