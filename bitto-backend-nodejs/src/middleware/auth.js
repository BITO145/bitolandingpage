const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Admin = require('../models/Admin');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({
        status: false,
        message: 'Unauthenticated Access..!!',
        data: []
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        status: false,
        message: 'Unauthenticated Access..!!',
        data: []
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: 'Unauthenticated Access..!!',
      data: []
    });
  }
};

const adminAuth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({
        status: false,
        message: 'Unauthenticated Access..!!',
        data: []
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.id);

    if (!admin) {
      return res.status(401).json({
        status: false,
        message: 'Unauthenticated Access..!!',
        data: []
      });
    }

    req.admin = admin;
    next();
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: 'Unauthenticated Access..!!',
      data: []
    });
  }
};

module.exports = { auth, adminAuth }; 