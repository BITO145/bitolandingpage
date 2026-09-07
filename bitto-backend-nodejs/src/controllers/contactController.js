const { sendEmail } = require('../config/email');
const Contact = require('../models/Contact');

// Submit contact form
exports.contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        status: false, 
        message: 'All fields are required', 
        data: null 
      });
    }

    // Save to database
    const contact = new Contact({
      name,
      email,
      message
    });

    await contact.save();

    // Try to send email notification (optional - won't break the request if it fails)
    try {
      const subject = `Contact Form Submission from ${name}`;
      const html = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `;
      await sendEmail(process.env.MAIL_FROM_ADDRESS, subject, html);
    } catch (emailError) {
      console.log('Email notification failed (data still saved):', emailError.message);
    }
    
    // Always return success since data was saved
    res.json({ 
      status: true, 
      message: 'Message sent successfully',
      data: contact
    });
  } catch (error) {
    console.error('Error in contact submission:', error);
    res.status(500).json({ 
      status: false, 
      message: 'Failed to submit contact form',
      data: null
    });
  }
};

// Get all contact submissions (admin only)
exports.getAllContacts = async (req, res) => {
  try {
    const { page, limit, status } = req.query;
    
    const filter = {};
    if (status) filter.status = status;

    let contacts;
    let count;

    if (page && limit) {
      // Paginated query
      contacts = await Contact.find(filter)
        .sort({ createdAt: -1 })
        .limit(Number(limit))
        .skip((Number(page) - 1) * Number(limit))
        .exec();

      count = await Contact.countDocuments(filter);

      return res.json({
        status: true,
        message: 'Contact submissions retrieved successfully',
        data: {
          contacts,
          totalPages: Math.ceil(count / limit),
          currentPage: Number(page),
          totalCount: count
        }
      });
    } else {
      // Return all contacts if no pagination
      contacts = await Contact.find(filter).sort({ createdAt: -1 }).exec();
      count = await Contact.countDocuments(filter);

      return res.json({
        status: true,
        message: 'All contact submissions retrieved successfully',
        data: {
          contacts,
          totalCount: count
        }
      });
    }

  } catch (error) {
    console.error('Error getting contacts:', error);
    res.status(500).json({
      status: false,
      message: 'Failed to retrieve contact submissions',
      data: null
    });
  }
};

// Get contact by ID
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        status: false,
        message: 'Contact submission not found',
        data: null
      });
    }

    res.json({
      status: true,
      message: 'Contact submission retrieved successfully',
      data: contact
    });

  } catch (error) {
    console.error('Error getting contact:', error);
    res.status(500).json({
      status: false,
      message: 'Failed to retrieve contact submission',
      data: null
    });
  }
};

// Update contact status (admin only)
exports.updateContactStatus = async (req, res) => {
  try {
    const { status, adminNotes } = req.body;
    
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { 
        status,
        adminNotes,
        updatedAt: new Date()
      },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({
        status: false,
        message: 'Contact submission not found',
        data: null
      });
    }

    res.json({
      status: true,
      message: 'Contact status updated successfully',
      data: contact
    });

  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({
      status: false,
      message: 'Failed to update contact status',
      data: null
    });
  }
};

// Delete contact (admin only)
exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        status: false,
        message: 'Contact submission not found',
        data: null
      });
    }

    res.json({
      status: true,
      message: 'Contact submission deleted successfully',
      data: null
    });

  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({
      status: false,
      message: 'Failed to delete contact submission',
      data: null
    });
  }
};