const Bodies = require('../../models/Bodies');

const getBodiesData = async (req, res) => {
  try {
    const bodies = await Bodies.findOne({ status: 1, _id: '1' });

    if (bodies) {
      return res.json(bodies);
    } else {
      return res.status(404).json({
        message: 'Bodies data not found.'
      });
    }
  } catch (error) {
    console.error('Bodies API Error:', error);
    return res.status(500).json({
      status: false,
      message: 'Internal server error',
      data: []
    });
  }
};

module.exports = {
  getBodiesData
}; 