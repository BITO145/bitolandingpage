const Chapter = require('../../models/Chapter');

const getChapterData = async (req, res) => {
  try {
    const chapter = await Chapter.findOne({ status: 1, _id: '1' });

    if (chapter) {
      return res.json(chapter);
    } else {
      return res.status(404).json({
        message: 'Chapter data not found.'
      });
    }
  } catch (error) {
    console.error('Chapter API Error:', error);
    return res.status(500).json({
      status: false,
      message: 'Internal server error',
      data: []
    });
  }
};

module.exports = {
  getChapterData
}; 