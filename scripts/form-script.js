'use strict';

const Form = document.querySelector('form');

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


const Utils = {
    // converter data americana para data brasileira
    editData(dataBr) {
        let data = dataBr.split('-').reverse().join('/')
            return data
    },

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
    },

    // Gerar ID de inscrição
    inscID() {
        let numid =  Math.floor(Math.random() * (1000 - 1300 + 1)) + 1300;
        return numid;
    },

    // adicionar loading do botão
    addLoading() {
        btnCon.innerHTML = '<img src="../assets/img/load-icon-png-27.png" class="loading">';
        return;
    },

    // remover loading do botão
    removeLoading() {
        btnCon.innerHTML = 'Concluir Inscrição'
        return;
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

// const inscricoes = {
//     getValues() {
//         return {
//             nome: nome.value,
//             nascimento: `${editData(nascimento.value)} | ${calculaIdade(nascimento.value)} anos`,
//             telefone: tel.value,
//             email: email.value,
//             localidade: local.value,
//             autorizacao: textFile.textContent,
//             modalidadePagamento: modalPag.value,
//             formaPagamento: formPag.value,
//             inscricaoID: `0000${inscID()}`
//         }
//     }
// }

// Chamar valores dos inputs
function showMe() {


    console.log(`${Utils.editData(nascimento.value)} | ${Utils.calculaIdade(nascimento.value)} anos`);
    console.log(Utils.inscID());

    // localStorage.setItem(inscricoes.getValues);

}


// Enviar dados para planilha
const handleSubmit = (event) => {
    event.preventDefault();
    Utils.addLoading();

    fetch('https://api.sheetmonkey.io/form/s5LdYdyD5GRvwMaoRBA2sV', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            // id: localStorage.getItem('inscricao-ID'),
            // name: nome.value,
            // idade:`${editData(nascimento.value)} | ${calculaIdade(nascimento.value)} anos`,
            // telefone: tel.value,
            // email: email.value,
            // Localidade: local.value,
            // autorizacao: textFile.textContent,
            // modalidade: modalPag.value,
            // forma: formPag.value,
        })
    }).then(() => Utils.removeLoading())
}

Form.addEventListener('submit', handleSubmit);
btnCon.addEventListener('click', showMe);
