const Organization = require('../../models/Organization');

const getOrganizationData = async (req, res) => {
  try {
    const organization = await Organization.findOne({ status: 1, _id: '1' });

    if (organization) {
      return res.json(organization);
    } else {
      return res.status(404).json({
        message: 'Organization data not found.'
      });
    }
  } catch (error) {
    console.error('Organization API Error:', error);
    return res.status(500).json({
      status: false,
      message: 'Internal server error',
      data: []
    });
  }
};

module.exports = {
  getOrganizationData
}; 