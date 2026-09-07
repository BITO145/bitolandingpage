const Cms = require('../models/Cms');
const Banner = require('../models/Banner');
const Book = require('../models/Book');
const Author = require('../models/Author');

const getCmsAbout = async (req, res) => {
  try {
    const cms_about = await Cms.findOne({ status: 1, mysql_id: 1 });
    return res.json(cms_about);
  } catch (error) {
    console.error('CMS About Error:', error);
    return res.status(500).json({
      status: false,
      message: 'Internal server error',
      data: []
    });
  }
};

const getBanners = async (req, res) => {
  try {
    const banner = await Banner.find({ status: 1 }).sort({ sort_order: 1 });
    return res.json(banner);
  } catch (error) {
    console.error('Banners Error:', error);
    return res.status(500).json({
      status: false,
      message: 'Internal server error',
      data: []
    });
  }
};

const getFeaturedBooks = async (req, res) => {
  try {
    const featured_books = await Book.find({
      status: 1,
      is_best_seller: 1
    }).populate('images').populate('author_id');
    
    return res.json(featured_books);
  } catch (error) {
    console.error('Featured Books Error:', error);
    return res.status(500).json({
      status: false,
      message: 'Internal server error',
      data: []
    });
  }
};

const getAuthors = async (req, res) => {
  try {
    const authors = await Author.find({ status: 1 });
    return res.json(authors);
  } catch (error) {
    console.error('Authors Error:', error);
    return res.status(500).json({
      status: false,
      message: 'Internal server error',
      data: []
    });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const all_books = await Book.find({ status: 1 })
      .populate('images')
      .populate('author_id');
    
    return res.json(all_books);
  } catch (error) {
    console.error('All Books Error:', error);
    return res.status(500).json({
      status: false,
      message: 'Internal server error',
      data: []
    });
  }
};

const list = async (req, res) => {
  const cms = await Cms.find();
  res.json(cms);
};

const get = async (req, res) => {
  const cms = await Cms.findById(req.params.id);
  if (!cms) return res.status(404).json({ message: 'Not found' });
  res.json(cms);
};

const create = async (req, res) => {
  const cms = new Cms(req.body);
  await cms.save();
  res.status(201).json(cms);
};

const update = async (req, res) => {
  const cms = await Cms.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!cms) return res.status(404).json({ message: 'Not found' });
  res.json(cms);
};

const del = async (req, res) => {
  const cms = await Cms.findByIdAndDelete(req.params.id);
  if (!cms) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted' });
};

module.exports = {
  getCmsAbout,
  getBanners,
  getFeaturedBooks,
  getAuthors,
  getAllBooks,
  list,
  get,
  create,
  update,
  delete: del
}; 