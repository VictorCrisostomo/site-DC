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



    function calculaIdade(dataNasc){ 
        let dataAtual = new Date();
        let anoAtual = dataAtual.getFullYear();
        let anoNascParts = dataNasc.split('-');
        let diaNasc =anoNascParts[2];
        let mesNasc =anoNascParts[1];
        let anoNasc =anoNascParts[0];
        let idade = anoAtual - anoNasc;
        let mesAtual = dataAtual.getMonth() + 1; 
        //Se mes atual for menor que o nascimento, nao fez aniversario ainda;  
        if(mesAtual < mesNasc){
        idade--; 
        } else {
        //Se estiver no mes do nascimento, verificar o dia
        if(mesAtual == mesNasc){ 
        if(new Date().getDate() < diaNasc ){ 
        //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
        idade--; 
        }
        }
        } 
        return idade; 
       }


    console.log(nome.value);
    console.log(`${nascimento.value} | ${calculaIdade(nascimento.value)} anos`);
    console.log(tel.value);
    console.log(email.value);
    console.log(local.value);
    
    if (autor.value === true) {
        console.log('autorização adicionada 🎉')
    } else {
        console.log('autorização não adicionada 😢')
    }

    if (pagamento.value === adulto) {
        console.log (pagamento.value);
    } else {
        console.log (pagamento.value);
    }
}

