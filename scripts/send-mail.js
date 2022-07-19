'use strict';

require('dotenv').config();

const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars')

const emailUser = process.env.USER_EMAIL
const emailPass = process.env.PASS_EMAIL
const emailTo = process.env.EMAILTO

const Store = {
  // pegar os valores do localStorage
  get () {
      return JSON.parse(localStorage.getItem('inscricao')) || []
  }
}

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
    subject: `✅ Nova isncrição | ${Store.get().nome} `,
    template: 'main',
    context: {
      nome: Store.get().nome,
      nascimento: Store.get().nascimento,
      localidade: Store.get().localidade,
      telefone: Store.get().telefone,
      email: Store.get().email,
      autorizacao: Store.get().textInput,
      modalPag: Store.get().modalidade,
      formPag: Store.get().forma,
    }
}

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response)
  }
});

// tentar a promisse https://www.youtube.com/watch?v=38aE1lSAJZ8&t=285s&ab_channel=EsterlingAccime