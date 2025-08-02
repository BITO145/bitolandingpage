require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/database');
const path = require('path');

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(',') || '*',
  credentials: true
}));
app.use(helmet());
app.use(morgan('dev'));

// Rate Limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100
});
app.use(limiter);

// Static files for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
const apiRoutes = require('./routes/api');
const authRoutes = require('./routes/auth');
const bannerRoutes = require('./routes/banner');
const bodiesRoutes = require('./routes/bodies');
const chapterRoutes = require('./routes/chapter');
const cmsHomeRoutes = require('./routes/cmsHome');
const galleriesRoutes = require('./routes/galleries');
const galleriesImageRoutes = require('./routes/galleriesImage');
const initiativesRoutes = require('./routes/initiatives');
const missionRoutes = require('./routes/mission');
const objectiveRoutes = require('./routes/objective');
const organizationRoutes = require('./routes/organization');
const roadmapRoutes = require('./routes/roadmap');
const actionpointsRoutes = require('./routes/actionpoints');
const testimonialRoutes = require('./routes/testimonial');
const uploadRoutes = require('./routes/upload');
const contactRoutes = require('./routes/contact');
const appointmentRoutes = require('./routes/appointment');
const membershipRoutes = require('./routes/membership');
app.use('/api', apiRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/banner', bannerRoutes);
app.use('/api/bodies', bodiesRoutes);
app.use('/api/chapter', chapterRoutes);
app.use('/api/cms', cmsHomeRoutes);
app.use('/api/galleries', galleriesRoutes);
app.use('/api/galleries-image', galleriesImageRoutes);
app.use('/api/initiatives', initiativesRoutes);
app.use('/api/mission', missionRoutes);
app.use('/api/objective', objectiveRoutes);
app.use('/api/organization', organizationRoutes);
app.use('/api/roadmap', roadmapRoutes);
app.use('/api/actionpoints', actionpointsRoutes);
app.use('/api/testimonial', testimonialRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/appointment', appointmentRoutes);
app.use('/api/membership', membershipRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('Bitto World Node.js API is running.');
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    status: false,
    message: 'Route not found',
    data: []
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({
    status: false,
    message: 'Internal server error',
    data: []
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 