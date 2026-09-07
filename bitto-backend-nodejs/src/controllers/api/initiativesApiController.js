const Initiatives = require('../../models/Initiatives');

const getInitiativesData = async (req, res) => {
  try {
    const initiatives = await Initiatives.findOne({ status: 1, _id: '1' });

    if (initiatives) {
      return res.json(initiatives);
    } else {
      return res.status(404).json({
        message: 'Initiatives data not found.'
      });
    }
  } catch (error) {
    console.error('Initiatives API Error:', error);
    return res.status(500).json({
      status: false,
      message: 'Internal server error',
      data: []
    });
  }
};

module.exports = {
  getInitiativesData
}; 