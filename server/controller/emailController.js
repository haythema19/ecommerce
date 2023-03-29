const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendMail = asyncHandler(async (data, req, res) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MP,
    },
  });

  let info = await transporter.sendMail({
    from: "From: '<duongpc99@gmail.com>'",
    to: data.to,
    subject: data.subject,
    text: data.text,
    html: data.htm,
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview url: %s", nodemailer.getTestMessageUrl(info));
});

module.exports = { sendMail };
