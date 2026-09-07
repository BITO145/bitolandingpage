const Galleries = require('../../models/Galleries');

const getGalleriesData = async (req, res) => {
  try {
    const galleries = await Galleries.findOne({ status: 1, _id: '1' }).populate('images');

    if (galleries) {
      return res.json(galleries);
    } else {
      return res.status(404).json({
        message: 'Galleries data not found.'
      });
    }
  } catch (error) {
    console.error('Galleries API Error:', error);
    return res.status(500).json({
      status: false,
      message: 'Internal server error',
      data: []
    });
  }
};

module.exports = {
  getGalleriesData
}; 