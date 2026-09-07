const Roadmap = require('../../models/Roadmap');

const getRoadmapData = async (req, res) => {
  try {
    const roadmap = await Roadmap.findOne({ status: 1, _id: '1' });

    if (roadmap) {
      return res.json(roadmap);
    } else {
      return res.status(404).json({
        message: 'Roadmap data not found.'
      });
    }
  } catch (error) {
    console.error('Roadmap API Error:', error);
    return res.status(500).json({
      status: false,
      message: 'Internal server error',
      data: []
    });
  }
};

module.exports = {
  getRoadmapData
}; 