const Chapter = require('../models/Chapter');

exports.list = async (req, res) => {
  const chapters = await Chapter.find();
  res.json(chapters);
};

exports.get = async (req, res) => {
  const chapter = await Chapter.findById(req.params.id);
  if (!chapter) return res.status(404).json({ message: 'Not found' });
  res.json(chapter);
};

exports.create = async (req, res) => {
  const chapter = new Chapter(req.body);
  await chapter.save();
  res.status(201).json(chapter);
};

exports.update = async (req, res) => {
  const chapter = await Chapter.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!chapter) return res.status(404).json({ message: 'Not found' });
  res.json(chapter);
};

exports.delete = async (req, res) => {
  const chapter = await Chapter.findByIdAndDelete(req.params.id);
  if (!chapter) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted' });
}; 