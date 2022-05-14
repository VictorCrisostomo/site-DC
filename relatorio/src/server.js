'use strict';
//server
const express = require('express');
const app = express();



app.get('/', (request, response) => {
    return response.send('hello')
})
app.listen(3000);


// const nome = document.querySelector('#nome');
// const nascimento = document.querySelector('#nascimento');
// const tel = document.querySelector('#telefone');
// const email = document.querySelector('#email');
// const local = document.querySelector('#localidade');

// const autor = document.querySelector('#autorizacao');

// const pagamento = document.querySelector('#pagamento');
// const adulto = document.querySelector('#adulto');
// const crianca = document.querySelector('#crianca');

// const btnCon = document.querySelector('#btn-concluir');


