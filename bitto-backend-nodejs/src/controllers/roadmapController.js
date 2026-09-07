const Roadmap = require('../models/Roadmap');

exports.list = async (req, res) => {
  const roadmaps = await Roadmap.find();
  res.json(roadmaps);
};

exports.get = async (req, res) => {
  const roadmap = await Roadmap.findById(req.params.id);
  if (!roadmap) return res.status(404).json({ message: 'Not found' });
  res.json(roadmap);
};

exports.create = async (req, res) => {
  const roadmap = new Roadmap(req.body);
  await roadmap.save();
  res.status(201).json(roadmap);
};

exports.update = async (req, res) => {
  const roadmap = await Roadmap.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!roadmap) return res.status(404).json({ message: 'Not found' });
  res.json(roadmap);
};

exports.delete = async (req, res) => {
  const roadmap = await Roadmap.findByIdAndDelete(req.params.id);
  if (!roadmap) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted' });
}; 