const Organization = require('../models/Organization');

exports.list = async (req, res) => {
  const organizations = await Organization.find();
  res.json(organizations);
};

exports.get = async (req, res) => {
  const organization = await Organization.findById(req.params.id);
  if (!organization) return res.status(404).json({ message: 'Not found' });
  res.json(organization);
};

exports.create = async (req, res) => {
  const organization = new Organization(req.body);
  await organization.save();
  res.status(201).json(organization);
};

exports.update = async (req, res) => {
  const organization = await Organization.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!organization) return res.status(404).json({ message: 'Not found' });
  res.json(organization);
};

exports.delete = async (req, res) => {
  const organization = await Organization.findByIdAndDelete(req.params.id);
  if (!organization) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted' });
}; 