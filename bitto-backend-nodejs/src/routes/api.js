const express = require('express');
const router = express.Router();

// Controllers
const cmsController = require('../controllers/cmsController');
const roadmapApiController = require('../controllers/api/roadmapApiController');
const missionApiController = require('../controllers/api/missionApiController');
const objectiveApiController = require('../controllers/api/objectiveApiController');
const bodiesApiController = require('../controllers/api/bodiesApiController');
const initiativesApiController = require('../controllers/api/initiativesApiController');
const chapterApiController = require('../controllers/api/chapterApiController');
const organizationApiController = require('../controllers/api/organizationApiController');
const galleriesApiController = require('../controllers/api/galleriesApiController');
const actionPointsApiController = require('../controllers/api/actionPointsApiController');

// Cache/config clear routes (dummy for Node.js)
router.get('/clear-cache', (req, res) => res.send('<h1>Cache facade value cleared</h1>'));
router.get('/config-clear', (req, res) => res.send('<h1>Cache facade value cleared</h1>'));
router.get('/clear-all', (req, res) => res.send('<h1>Clear All</h1>'));

// CMS & Banners
router.get('/cms/about', cmsController.getCmsAbout);
router.get('/banners', cmsController.getBanners);

// API Endpoints
router.get('/roadmap', roadmapApiController.getRoadmapData);
router.get('/mission', missionApiController.getMissionData);
router.get('/objective', objectiveApiController.getObjectiveData);
router.get('/bodies', bodiesApiController.getBodiesData);
router.get('/initiatives', initiativesApiController.getInitiativesData);
router.get('/chapter', chapterApiController.getChapterData);
router.get('/organization', organizationApiController.getOrganizationData);
router.get('/galleries', galleriesApiController.getGalleriesData);
router.get('/actionpoints', actionPointsApiController.getActionPointsData);

// Additional CMS endpoints
router.get('/cms/featured-books', cmsController.getFeaturedBooks);
router.get('/cms/authors', cmsController.getAuthors);
router.get('/cms/all-books', cmsController.getAllBooks);

module.exports = router; 