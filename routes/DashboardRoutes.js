const express = require('express');
const router = express.Router();
const DashboardController = require('../controllers/DashboardController');
const authMiddleware = require('../middlewares/AuthMiddleware');

// Dashboard route (protected)
router.get('/dashboard', authMiddleware, DashboardController.getDashboardData);

module.exports = router;
