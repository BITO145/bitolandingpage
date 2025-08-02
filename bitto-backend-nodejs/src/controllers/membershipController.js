const { sendEmail } = require('../config/email');
const Membership = require('../models/Membership');

// Submit membership form
exports.submitMembership = async (req, res) => {
  try {
    const { 
      name, 
      email, 
      phone, 
      organization, 
      membershipType, 
      message 
    } = req.body;
    
    if (!name || !email || !phone || !membershipType) {
      return res.status(400).json({ 
        status: false, 
        message: 'Name, email, phone, and membership type are required', 
        data: null 
      });
    }

    // Save to database
    const membership = new Membership({
      name,
      email,
      phone,
      organization,
      membershipType,
      message
    });

    await membership.save();

    // Try to send email notification (optional - won't break the request if it fails)
    try {
      const subject = `New Membership Application from ${name}`;
      const html = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Organization:</strong> ${organization || 'N/A'}</p>
        <p><strong>Membership Type:</strong> ${membershipType}</p>
        <p><strong>Message:</strong> ${message || 'N/A'}</p>
      `;
      await sendEmail(process.env.MAIL_FROM_ADDRESS, subject, html);
    } catch (emailError) {
      console.log('Email notification failed (data still saved):', emailError.message);
    }
    
    // Always return success since data was saved
    res.json({ 
      status: true, 
      message: 'Membership application submitted successfully',
      data: membership
    });
  } catch (error) {
    console.error('Error in membership submission:', error);
    res.status(500).json({ 
      status: false, 
      message: 'Failed to submit membership application',
      data: null
    });
  }
};

// Get all membership applications (admin only)
exports.getAllMemberships = async (req, res) => {
  try {
    const { page = 1, limit = 10, status, membershipType } = req.query;
    
    const filter = {};
    if (status) filter.status = status;
    if (membershipType) filter.membershipType = membershipType;

    const memberships = await Membership.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Membership.countDocuments(filter);

    res.json({
      status: true,
      message: 'Membership applications retrieved successfully',
      data: {
        memberships,
        totalPages: Math.ceil(count / limit),
        currentPage: parseInt(page),
        totalCount: count
      }
    });

  } catch (error) {
    console.error('Error getting memberships:', error);
    res.status(500).json({
      status: false,
      message: 'Failed to retrieve membership applications',
      data: null
    });
  }
};

// Get membership by ID
exports.getMembershipById = async (req, res) => {
  try {
    const membership = await Membership.findById(req.params.id);
    
    if (!membership) {
      return res.status(404).json({
        status: false,
        message: 'Membership application not found',
        data: null
      });
    }

    res.json({
      status: true,
      message: 'Membership application retrieved successfully',
      data: membership
    });

  } catch (error) {
    console.error('Error getting membership:', error);
    res.status(500).json({
      status: false,
      message: 'Failed to retrieve membership application',
      data: null
    });
  }
};

// Update membership status (admin only)
exports.updateMembershipStatus = async (req, res) => {
  try {
    const { status, adminNotes } = req.body;
    
    const membership = await Membership.findByIdAndUpdate(
      req.params.id,
      { 
        status,
        adminNotes,
        updatedAt: new Date()
      },
      { new: true }
    );

    if (!membership) {
      return res.status(404).json({
        status: false,
        message: 'Membership application not found',
        data: null
      });
    }

    res.json({
      status: true,
      message: 'Membership status updated successfully',
      data: membership
    });

  } catch (error) {
    console.error('Error updating membership:', error);
    res.status(500).json({
      status: false,
      message: 'Failed to update membership status',
      data: null
    });
  }
};

// Delete membership (admin only)
exports.deleteMembership = async (req, res) => {
  try {
    const membership = await Membership.findByIdAndDelete(req.params.id);
    
    if (!membership) {
      return res.status(404).json({
        status: false,
        message: 'Membership application not found',
        data: null
      });
    }

    res.json({
      status: true,
      message: 'Membership application deleted successfully',
      data: null
    });

  } catch (error) {
    console.error('Error deleting membership:', error);
    res.status(500).json({
      status: false,
      message: 'Failed to delete membership application',
      data: null
    });
  }
}; 