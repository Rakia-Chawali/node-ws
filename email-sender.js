const nodemailer = require("nodemailer");

// create a transporter object to handle sending the email
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // your email server
  port: 587,
  secure: false, // use SSL
  auth: {
    user: "rakiagomycode@gmail.com",
    pass: "rakia2018*",
  },
});

// setup email data
let mailOptions = {
  from: '"Rakia Chawali" <rakiagomycode@gmail.com>',
  to: "rakiamohamed117@.com",
  subject: "Subject of the email",
  text: "Plain text message",
  html: "<p>HTML message</p>",
};

// send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Email sent: %s", info.messageId);
});
