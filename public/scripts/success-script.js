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


// pegar inputs para o localSotorage
const Store = {
    // pegar os valores do localStorage
    get () {
        return JSON.parse(localStorage.getItem('inscricao')) || []
    }
}



    const spliceName = Store.get().nome.split(' ')
    const firstName = spliceName[0]
    const lastName = spliceName.slice(1).join(' ')


    //  campos de conferencia
    nomeConf.innerHTML= Store.get().nome;
    nascConf.innerHTML= Store.get().nascimento;
    localConf.innerHTML= Store.get().localidade;
    telConf.innerHTML= Store.get().telefone;
    emailConf.innerHTML= Store.get().email;
    autorConf.innerHTML= Store.get().textInput;
    modalPagConf.innerHTML= Store.get().modalidade;
    formPagConf.innerHTML= Store.get().forma;

    // campos do overlay
    nomeData.innerHTML= firstName;
    segNomeData.innerHTML= lastName;
    origemData.innerHTML= Store.get().localidade;
    numInscData.innerHTML= `Nº 0000${Store.get().inscID}`;


console.log('Cheguei Papai!!!')