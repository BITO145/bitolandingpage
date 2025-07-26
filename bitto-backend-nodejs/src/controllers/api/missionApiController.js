const Mission = require('../../models/Mission');

const getMissionData = async (req, res) => {
  try {
    const mission = await Mission.findOne({ status: 1, _id: '1' });

    if (mission) {
      return res.json(mission);
    } else {
      return res.status(404).json({
        message: 'Mission data not found.'
      });
    }
  } catch (error) {
    console.error('Mission API Error:', error);
    return res.status(500).json({
      status: false,
      message: 'Internal server error',
      data: []
    });
  }
};

module.exports = {
  getMissionData
}; 