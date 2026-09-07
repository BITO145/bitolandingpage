const Objective = require('../../models/Objective');

const getObjectiveData = async (req, res) => {
  try {
    const objective = await Objective.findOne({ status: 1, _id: '1' });

    if (objective) {
      return res.json(objective);
    } else {
      return res.status(404).json({
        message: 'Objective data not found.'
      });
    }
  } catch (error) {
    console.error('Objective API Error:', error);
    return res.status(500).json({
      status: false,
      message: 'Internal server error',
      data: []
    });
  }
};

module.exports = {
  getObjectiveData
}; 