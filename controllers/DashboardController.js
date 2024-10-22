const DashboardModel = require('../models/DashboardModel');

const getDashboardData = async (req, res) => {
  try {
    const userId = req.user.id;

    // Fetch exercise logs, goals, and progress
    const exercises = await DashboardModel.getExerciseLogs(userId);
    const goals = await DashboardModel.getUserGoals(userId);
    const progress = await DashboardModel.getProgressSummary(userId);

    return res.status(200).json({
      success: true,
      data: {
        exercises,
        goals,
        progress,
      },
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return res.status(500).json({
      success: false,
      message: 'Error fetching dashboard data',
    });
  }
};

module.exports = {
  getDashboardData,
};
