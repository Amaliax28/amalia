const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  const { name, email, subject, message } = JSON.parse(event.body);

  // Replace these variables with your own email settings
  const to = "amaliantsha@gmail.com";
  const from = `${name} <${email}>`;

  // Configure transporter with your SMTP settings
  const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    secure: false,
    auth: {
      user: "your_smtp_username",
      pass: "your_smtp_password",
    },
  });

  // Create email message
  const mailOptions = {
    from: from,
    to: to,
    subject: subject || "Contact Form Submission",
    html: `
      <p>Email from: ${name}</p>
      <p>Email address: ${email}</p>
      <p>Message:</p>
      <p>${message}</p>
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: "OK",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: "Error sending email. Please try again.",
    };
  }
};
