const nodemailer = require("nodemailer");
require("dotenv").config();



// create a transporter object to handle sending the email
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.adress,
    pass: process.env.password,
  }
});

// setup email data
let mailOptions = {
  from: "rakiagomycode@gmail.com",
  to: "rakiagomycode@gmail.com",
  subject: "Subject of the email",
  text: "Plain text message",
};

// send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: ", info.response);
  }
});
