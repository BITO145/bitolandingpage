const ActionPoints = require('../../models/ActionPoints');

const getActionPointsData = async (req, res) => {
  try {
    const actionPoints = await ActionPoints.findOne({ status: 1, _id: '1' });

    if (actionPoints) {
      return res.json(actionPoints);
    } else {
      return res.status(404).json({
        message: 'Action Points data not found.'
      });
    }
  } catch (error) {
    console.error('Action Points API Error:', error);
    return res.status(500).json({
      status: false,
      message: 'Internal server error',
      data: []
    });
  }
};

module.exports = {
  getActionPointsData
}; 