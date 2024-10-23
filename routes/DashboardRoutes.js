const express = require('express');
const router = express.Router();
const DashboardController = require('../controllers/DashboardController');
const authenticateToken = require('../middlewares/AuthMiddleware');

// Dashboard route (protected)
router.get('/', authenticateToken, DashboardController.getDashboardData);

module.exports = router;
