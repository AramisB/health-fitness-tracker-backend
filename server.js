const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ExerciseLogRoutes = require('./routes/ExerciseLogRoutes');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const GoalsRoutes = require('./routes/GoalsRoutes');
const ProgressRoutes = require('./routes/ProgressRoutes');
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors({
    origin: 'https://monkfish-app-od5cu.ondigitalocean.app/'
})); // Enable CORS
app.use(express.json());

// Routes
app.use('/api', userRoutes);
app.use('/api/log-exercise', ExerciseLogRoutes);
app.use('/api/goals', GoalsRoutes);
app.use('/api/progress', ProgressRoutes);

// Handle /api route
app.get('/api', (req, res) => {
  res.send('Welcome to the API of Health and Fitness Tracker!');
});

// Handle root route
app.get('/', (req, res) => {
    res.send('Welcome to the Health and Fitness Tracker API!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
