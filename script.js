'use strict';

const nome = document.querySelector('#nome');
const nascimento = document.querySelector('#nascimento');
const tel = document.querySelector('#telefone');
const email = document.querySelector('#email');
const local = document.querySelector('#localidade');

const autor = document.querySelector('#autorizacao');

const pagamento = document.querySelector('#pagamento');
const adulto = document.querySelector('#adulto');
const crianca = document.querySelector('#crianca');

const btnCon = document.querySelector('#btn-concluir');

btnCon.addEventListener('click', showMe);

function showMe() {
    console.log(nome.value);
    console.log(nascimento.value);
    console.log(tel.value);
    console.log(email.value);
    console.log(local.value);
    
    

    if (pagamento.value === adulto) {
        console.log (pagamento.value);
    } else {
        console.log (pagamento.value);
    }
}