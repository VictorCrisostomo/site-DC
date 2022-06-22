'use strict';

// campos do overlay
const nomeData = document.querySelector('#nome-data');
const segNomeData = document.querySelector('#segundo-nome-data');
const origemData = document.querySelector('#origem-data');
const numInscData = document.querySelector('#num-insc-data');

// campos da conferencia de dados
const nomeConf = document.querySelector('#nome-conf');
const nascConf = document.querySelector('#nascimento-conf');
const localConf = document.querySelector('#local-conf');
const telConf = document.querySelector('#tel-conf');
const emailConf = document.querySelector('#email-conf');
const autorConf = document.querySelector('#autor-conf');
const modalPagConf = document.querySelector('#modal-conf');
const formPagConf = document.querySelector('#form-pag')

const btnWhats = document.querySelector('#btn-whats');


// nomeData.innerHTML= sessionStorage.getItem('nome')

btnWhats.addEventListener('click', showMe);

// // Chamar valores dos inputs
function showMe() {

    //  campos de conferencia
    nomeConf.innerHTML= localStorage.getItem('nome');
    nascConf.innerHTML= localStorage.getItem('nascimento');
    localConf.innerHTML= localStorage.getItem('localidade');
    telConf.innerHTML= localStorage.getItem('telefone');
    emailConf.innerHTML= localStorage.getItem('email');
    autorConf.innerHTML= localStorage.getItem('autorizacao');
    modalPagConf.innerHTML= localStorage.getItem('modalidade-pagamento');
    formPagConf.innerHTML= localStorage.getItem('forma-pagamento');

    // campos do overlay
    nomeData.innerHTML= localStorage.getItem('nome');
    segNomeData.innerHTML= localStorage.getItem('');
    origemData.innerHTML= localStorage.getItem('localidade');
    numInscData.innerHTML= `Nº ${localStorage.getItem('inscricao-ID')}`;


}

console.log('Cheguei Papai!!!')