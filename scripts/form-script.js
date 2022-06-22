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


// converter data americana para data brasileira
function editData (dataBr) {
    let data = dataBr.split('-').reverse().join('/')
        return data
}

// Calcular idade
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
    } return idade; 
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

// Gerar ID de inscrição
const inscID = () => 
Math.floor(Math.random() * (1000 - 1300 + 1)) + 1300


btnCon.addEventListener('click', showMe);

// Chamar valores dos inputs
function showMe() {

    // const insc = {
    //     name: nome.value
    // }

    // sessionStorage.setItem('inscricao', JSON.stringify(insc));

    console.log(nome.value);
    console.log(`${editData(nascimento.value)} | ${calculaIdade(nascimento.value)} anos`);
    console.log(tel.value);
    console.log(email.value);
    console.log(local.value);
    console.log(textFile.textContent);
    console.log(modalPag.value);
    console.log(formPag.value);
    console.log(`0000${inscID()}`)
    
    localStorage.setItem('nome', nome.value);
    localStorage.setItem('nascimento', `${editData(nascimento.value)} | ${calculaIdade(nascimento.value)} anos`);
    localStorage.setItem('telefone', tel.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('localidade', local.value);
    localStorage.setItem('autorizacao', textFile.textContent);
    localStorage.setItem('modalidade-pagamento', modalPag.value);
    localStorage.setItem('forma-pagamento', formPag.value);
    localStorage.setItem('inscricao-ID', `0000${inscID()}`);

}

// adicinar e remover loading do botão
const addLoading = () => {
    btnCon.innerHTML = '<img src="./assets/img/load-icon-png-27.png" class="loading">'
}
const removeLoading = () => {
    btnCon.innerHTML = 'Concluir Inscrição'
}

// Enviar dados para planilha
const handleSubmit = (event) => {
    event.preventDefault();
    addLoading();

    fetch('https://api.sheetmonkey.io/form/s5LdYdyD5GRvwMaoRBA2sV', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: sessionStorage.getItem('inscricao-ID'),
            name: nome.value,
            idade:`${editData(nascimento.value)} | ${calculaIdade(nascimento.value)} anos`,
            telefone: tel.value,
            email: email.value,
            Localidade: local.value,
            autorizacao: textFile.textContent,
            modalidade: modalPag.value,
            forma: formPag.value,
        })
    }).then(() => removeLoading())
}

Form.addEventListener('submit', handleSubmit);
