'use strict';

require('dotenv').config();

const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars')

const emailUser = process.env.USER_EMAIL
const emailPass = process.env.PASS_EMAIL
const emailTo = process.env.EMAILTO

const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/pages/index.html')
})

app.post('/', (req, res) => {
  console.log(req.body);

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: emailUser,
        pass: emailPass
    }
  })

  const handlebarOptions = {
    viewEngine : {
      extName: ".handlebars",
      partialsDir: path.resolve('./views'),
      defaultLayout: false,
    },
    viewPath: path.resolve('./views'),
    extName: ".handlebars"
  }

  transporter.use('compile', hbs(handlebarOptions))

  let mailOptions = {
      from: `Victor Crisóstomo <${emailUser}>`,
      to: emailTo,
      subject: `✅ Nova inscrição - ${req.body.inscID} | ${req.body.nome} `,
      template: 'main',
      context: {
        inscID: req.body.inscID,
        nome: req.body.nome,
        nascimento: req.body.nascimento,
        localidade: req.body.localidade,
        telefone: req.body.telefone,
        email: req.body.email,
        autorizacao: req.body.textInput,
        modalPag: req.body.modalidade,
        formPag: req.body.forma,
      }
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.send("error");
      } else {
        console.log('Email sent: ' + info.response)
        res.send("sucsses");
      }
    });
})

// start server express
app.listen(PORT, () => {
  console.log(`App started on ${PORT}`);
})