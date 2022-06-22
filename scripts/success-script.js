const nomeData = document.querySelector('#nome-data');
const segNomeData = document.querySelector('#segundo-nome-data');
const origemData = document.querySelector('#origem-data');
const numInscData = document.querySelector('#num-insc-data');

const btnWhats = document.querySelector('#btn-whats');


// nomeData.innerHTML= sessionStorage.getItem('nome')

btnWhats.addEventListener('click', showMe);

// // Chamar valores dos inputs
function showMe() {

nomeData.innerHTML= localStorage.getItem('nome');
segNomeData.innerHTML= localStorage.getItem('');
origemData.innerHTML= localStorage.getItem('localidade');
numInscData.innerHTML= localStorage.getItem('inscricao-ID');


}

console.log('Cheguei Papai!!!')