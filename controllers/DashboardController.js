const axios = require('axios'); // Import axios

const getDashboardData = async (req, res) => {
  try {
    // Extract the token from the request headers
    const token = req.headers.authorization.split(' ')[1];

    // Fetch exercise logs
    const exerciseResponse = await axios.get(`https://seal-app-buzkz.ondigitalocean.app/api/log-exercise`, {
      headers: {
        Authorization: `Bearer ${token}`, // Use the extracted token
      },
    });
    const exercises = exerciseResponse.data.logs;

    // Fetch goals
    const goalsResponse = await axios.get(`https://seal-app-buzkz.ondigitalocean.app/api/goals`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const goals = goalsResponse.data.goals;

    // Fetch progress
    const progressResponse = await axios.get(`https://seal-app-buzkz.ondigitalocean.app/api/progress`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const progress = progressResponse.data.progress;

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
