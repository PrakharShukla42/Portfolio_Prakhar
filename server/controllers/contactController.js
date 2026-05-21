const nodemailer = require('nodemailer');

const sendContactMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Please provide all required fields' });
  }

  try {
    // In a real application, you would configure SMTP settings here.
    // We mock it for now or provide instructions in .env
    
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS
    //   }
    // });
    
    // const mailOptions = {
    //   from: email,
    //   to: process.env.RECEIVER_EMAIL,
    //   subject: `Portfolio Contact: ${subject}`,
    //   text: `Message from ${name} (${email}):\n\n${message}`
    // };
    
    // await transporter.sendMail(mailOptions);

    console.log(`Received message from ${name} (${email}): ${subject}`);
    
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Server error, could not send message' });
  }
};

module.exports = {
  sendContactMessage
};
