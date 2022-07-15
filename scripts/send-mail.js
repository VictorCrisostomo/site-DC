// 'use strict';

const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars')

require('dotenv').config();

const emailUser = process.env.USER_EMAIL
const emailPass = process.env.PASS_EMAIL
const emailTo = process.env.EMAILTO

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: emailUser,
        pass: emailPass
    }
});

const handlebarOptions = {
  viewEngine : {
    extName: ".handlebars",
    partialsDir: path.resolve('../views'),
    defaultLayout: false,
  },
  viewPath: path.resolve('../views'),
  extName: ".handlebars"
}

transporter.use('compile', hbs(handlebarOptions))

let mailOptions = {
    from: `Victor Crisóstomo <${emailUser}>`,
    to: emailTo,
    subject: "📜 | Nova isncrição!",
    template: 'main',
    context: {
      title: 'Title Here',
      text: "Lorem ipsum dolor sit amet, consectetur..."
    }
}

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response)
  }
});

