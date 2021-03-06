'use strict';

// campos do overlay
const svg = document.querySelector('#svg')
const nomeData = document.querySelector('#nome-data');
const segNomeData = document.querySelector('#segundo-nome-data');
const origemData = document.querySelector('#origem-data');
const numInscData = document.querySelector('#num-insc-data');

const btnDown = document.querySelector('#btn-down');

// campos da conferencia de dados
const nomeConf = document.querySelector('#nome-conf');
const nascConf = document.querySelector('#nascimento-conf');
const localConf = document.querySelector('#local-conf');
const telConf = document.querySelector('#tel-conf');
const emailConf = document.querySelector('#email-conf');
const autorConf = document.querySelector('#autor-conf');
const modalPagConf = document.querySelector('#modal-conf');
const formPagConf = document.querySelector('#form-pag');

const formPG = document.querySelector('#form-PG');
const btnPag = document.querySelector('#btn-pagamento');

// Modal
const pixInt = document.querySelector('#pix-250');
const pixMeia = document.querySelector('#pix-125');
const cartaoCred = document.querySelector('#credito');
const payHand = document.querySelector('#pay-hands');

const modSelect = document.querySelector('#mod-select');
const formSelect = document.querySelector('#form-select');

const btnWhats = document.querySelector('#btn-whats');

// pegar inputs para o localSotorage
const Store = {
    get () {
        return JSON.parse(localStorage.getItem('inscricao')) || []
    }
}

const captVal = {
    nome: Store.get().nome,
    nascimento: Store.get().nascimento,
    localidade: Store.get().localidade,
    telefone: Store.get().telefone,
    email: Store.get().email,
    autorizacao: Store.get().textInput,
    modalidade: Store.get().modalidade,
    forma: Store.get().forma,
    ID: Store.get().inscID
}

const Overlay = {
        
    spliceName: captVal.nome.split(' '),

    firstName() {
        let nome = this.spliceName[0];
        return nome.toUpperCase();
    },
    lastName() {
        let segundoNome = this.spliceName.slice(1).join(' ')
        return segundoNome.toUpperCase();
    },
    location() {
        let local = captVal.localidade.toUpperCase();
        return local;
    },
    numId() {
        return `N?? 0000${captVal.ID}`
    }
}

const Pagmento = {
    botaoModal() {
        let mod = captVal.modalidade;
        let form = captVal.forma;

        if (form === "PIX" && mod === "Inteira R$ 250,00 (adulto)") {

            pixInt.classList.remove('hidden')

        } else if (form === "PIX" && mod ==="Meia R$ 125,00 (crian??as 06 a 11 anos)") {

            pixMeia.classList.remove('hidden')

        } else if (form === "Cart??o de credito") {

            cartaoCred.classList.remove('hidden')

        } else if (form === "Pagar em m??os") {
            
            payHand.classList.remove('hidden')

        }
    }
}

    //  campos de conferencia
    nomeConf.innerHTML= captVal.nome;
    nascConf.innerHTML= captVal.nascimento;
    localConf.innerHTML= captVal.localidade;
    telConf.innerHTML= captVal.telefone;
    emailConf.innerHTML= captVal.email;
    autorConf.innerHTML= captVal.autorizacao;
    modalPagConf.innerHTML= captVal.modalidade;
    formPagConf.innerHTML= captVal.forma;

    // campos do overlay
    nomeData.innerHTML= Overlay.firstName();
    segNomeData.innerHTML= Overlay.lastName();
    origemData.innerHTML= Overlay.location();
    numInscData.innerHTML= Overlay.numId();

    // campo de pagamento
    formPG.innerHTML= captVal.forma;

    // Modal
    modSelect.innerHTML= captVal.modalidade;
    formSelect.innerHTML= captVal.forma;
    Pagmento.botaoModal();

const {x, y, width, height} = svg.viewBox.baseVal;
const blob = new Blob([svg.outerHTML], {type: 'image/svg+xml'});
const url = URL.createObjectURL(blob);
const image = document.createElement('img');
image.src =  url;
image.addEventListener('load', () => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    context.drawImage(image, x, y, width, height);
    btnDown.href = canvas.toDataURL();
    URL.revokeObjectURL(url);
})

console.log('Cheguei Papai!!!')