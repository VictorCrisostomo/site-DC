'use strict';

const nome = document.querySelector('#nome');
const nascimento = document.querySelector('#nascimento');
const tel = document.querySelector('#telefone');
const email = document.querySelector('#email');
const local = document.querySelector('#localidade');

const realFile = document.querySelector('#real-file');
const btnFile = document.querySelector('#btn-file');
const textFile = document.querySelector('#text-file');

const modalPag = document.querySelector('#modal-pag');
const adulto = document.querySelector('#adulto');
const crianca = document.querySelector('#crianca');

const formPag = document.querySelector('#form-pag');
const pix = document.querySelector('#pix');
const cred = document.querySelector('#credito');
const pagMao = document.querySelector('#pag-mao');

const btnCon = document.querySelector('#btn-concluir');

// const inscricao = {
//     getValues() {
//         return {
//             nome: nome.value,
//             data: nome.value,
//             telefone: nome.value,
//             : nome.value,
//             nome: nome.value,
//             nome: nome.value,
//             nome: nome.value,
//             nome: nome.value,
//             nome: nome.value
//         }
//     }
// }

const Utils = {
    
    // Calcular idade
    calculaIdade(dataNasc){ 
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
        } return idade; 
    }
}

// Mostrar arquivo selecionado do input file
Array.prototype.forEach.call(document.querySelectorAll('.file-upload__button'), function (button) {
    const hiddenInput = button.parentElement.querySelector('.file-upload__input');
    const label = button.parentElement.querySelector('.file-upload__label');
    const defaultLabelText = 'Nenhum arquivo selecionado.';

    // Set default text for label
    label.textContent = defaultLabelText;
    label.title = defaultLabelText;

    button.addEventListener('click', function () {
        hiddenInput.click();
    })

    hiddenInput.addEventListener('change', function () {
        const filenameList = Array.prototype.map.call(hiddenInput.files, function (file) {
            return file.name
        })

        label.textContent = filenameList.join() || defaultLabelText;
        label.title = label.textContent;
    })
})

const Form = {
    nome: nome,
    nascimento: nascimento,
    telefone: tel,
    email: email,
    localidade: local,
    autorizacao: textFile,
    modalidadePag: modalPag,
    formaPag: formPag,

    getValues() {
        return {
            nome: Form.nome.value,
            nascimento: Form.nascimento.value,
            telefone: Form.tel.value,
            email: Form.email.value,
            localidade: Form.local.value,
            autorizacao: Form.textFile.value,
            modalidade_pag: Form.modalidadePag.value,
            forma_pag: Form.formaPag.value
        }
    },


    submit(event) {
        event.preventDefault();
    }
}


btnCon.addEventListener('click', showMe);

// Chamar valores dos inputs
function showMe() {
    // converter data americana para data brasileira
    let dataBr = nascimento.value.split('-').reverse().join('/')

    Form.getValues()

    // console.log(nome.value);
    // console.log(`${dataBr} | ${Utils.calculaIdade(nascimento.value)} anos`);
    // console.log(tel.value);
    // console.log(email.value);
    // console.log(local.value);
    // console.log(textFile.textContent);
    // console.log (modalPag.value);
    // console.log (formPag.value);
    
    // sessionStorage.setItem('nome', nome.value);
    // sessionStorage.setItem('nascimento', `${dataBr} | ${calculaIdade(nascimento.value)} anos`);
    // sessionStorage.setItem('tel', tel.value);
    // sessionStorage.setItem('email', email.value);
    // sessionStorage.setItem('local', local.value);
    // sessionStorage.setItem('autorizacao', textFile.textContent);
    // sessionStorage.setItem('mod-pag', modalPag.value);
    // sessionStorage.setItem('form-pag', formPag.value);
    
}




// const nomeData = document.querySelector('#nome-data');
// const segNomeData = document.querySelector('#segundo-nome-data');
// const origemData = document.querySelector('#origem-data');
// const numInscData = document.querySelector('#num-insc-data');

// btnEnv.addEventListener('click', showMe);

// // Chamar valores dos inputs
// function showMe() {

// nomeData.innerHTML= nome.value;
// segNomeData.innerHTML= segNome.value;
// origemData.innerHTML= origem.value;
// numInscData.innerHTML= `Nº 0000${numInsc.value}`;

// }

