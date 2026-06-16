import geraSenha from './gerador';
const senhaGerada = document.querySelector('.senha-gerada')
const quant = document.querySelector('.quant');
const checkMaiuscula = document.querySelector('.check-maiusculas');
const checkMinuscula = document.querySelector('.check-minusculas');
const checkSimbolo = document.querySelector('.check-simbolos');
const checkNumero = document.querySelector('.check-numeros');
const gerarSenha = document.querySelector('.gerar-senha');

export default () => {
    gerarSenha.addEventListener('click', ()=> {
        senhaGerada.innerHTML = `${gera()}`;
    })
}

function gera(){
    return geraSenha(quant.value, checkMinuscula.checked, checkMaiuscula.checked, checkNumero.checked, checkSimbolo.checked) || 'Selecione as opções'

}

