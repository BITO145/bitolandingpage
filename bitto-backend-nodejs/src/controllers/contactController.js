const { sendEmail } = require('../config/email');

exports.contact = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ status: false, message: 'All fields are required', data: [] });
  }
  const subject = `Contact Form Submission from ${name}`;
  const html = `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message}</p>`;
  const result = await sendEmail(process.env.MAIL_FROM_ADDRESS, subject, html);
  if (result.success) {
    res.json({ status: true, message: 'Message sent successfully' });
  } else {
    res.status(500).json({ status: false, message: 'Failed to send message', error: result.error });
  }
}; 