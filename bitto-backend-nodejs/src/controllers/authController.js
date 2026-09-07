const User = require('../models/User');
const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generateToken = (id, role = 'user') => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });
};

// User Registration
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ status: false, message: 'All fields are required', data: [] });
    }
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ status: false, message: 'Email already exists', data: [] });
    }
    const user = await User.create({ name, email, password });
    const token = generateToken(user._id, 'user');
    res.status(201).json({ status: true, token, user: user.toJSON() });
  } catch (error) {
    console.error('Register Error:', error);
    res.status(500).json({ status: false, message: 'Internal server error', data: [] });
  }
};

// User Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ status: false, message: 'Email and password required', data: [] });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ status: false, message: 'Invalid credentials', data: [] });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ status: false, message: 'Invalid credentials', data: [] });
    }
    const token = generateToken(user._id, 'user');
    res.json({ status: true, token, user: user.toJSON() });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ status: false, message: 'Internal server error', data: [] });
  }
};

// Admin Login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ status: false, message: 'Email and password required', data: [] });
    }
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ status: false, message: 'Invalid credentials', data: [] });
    }
    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ status: false, message: 'Invalid credentials', data: [] });
    }
    const token = generateToken(admin._id, 'admin');
    res.json({ status: true, token, admin: admin.toJSON() });
  } catch (error) {
    console.error('Admin Login Error:', error);
    res.status(500).json({ status: false, message: 'Internal server error', data: [] });
  }
};

module.exports = {
  register,
  login,
  adminLogin,
}; 