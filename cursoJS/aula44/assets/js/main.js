const form = document.querySelector('#form');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    console.log('Evento previnido');

    const peso = Number(form.querySelector('#peso').value);
    const altura = Number(form.querySelector('#altura').value);
    let imc = (peso) / (altura * altura);

    setResultado(imc.toFixed(2))
});

function setResultado(msg) {
    const resultado = document.querySelector('#resultado');
    if (msg < 18.5) {
        resultado.innerHTML = `<p>IMC: ${msg}</p><p>Abaixo do peso</p>`;
    } else if (msg > 18.5 && msg < 24.9) {
resultado.innerHTML = `<p>IMC: ${msg}</p><p>Peso normal</p>`;  
    } else if (msg > 25 && msg < 29.9) {
resultado.innerHTML = `<p>IMC: ${msg}</p><p>Sobrepeso</p>`;  
    } else if (msg > 30 && msg < 34.9) {
resultado.innerHTML = `<p>IMC: ${msg}</p><p>Obesidade grau 1</p>`;  
    } else if (msg > 35 && msg < 39.9) {
resultado.innerHTML = `<p>IMC: ${msg}</p><p>Obesidade grau 2</p>`;  
    } else if (msg > 40) {
resultado.innerHTML = `<p>IMC: ${msg}</p><p>Obesidade grau 3</p>`;  
    }


}
