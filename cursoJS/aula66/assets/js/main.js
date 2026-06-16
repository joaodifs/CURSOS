const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function criarHoraDosSegundos(segundos){
    const data = new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone:'GMT'
    });
}

function iniciaRelogio(){
     timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criarHoraDosSegundos(segundos);
    },1000)
}

function pausaRelogio(){
    stop
}

iniciar.addEventListener('click', function(event){
    iniciaRelogio();
    relogio.classList.remove('pausado');
})

pausar.addEventListener('click', function(event){
    clearInterval(timer)
    relogio.classList.add('pausado');
})

zerar.addEventListener('click', function(event){
    segundos = 0;
    relogio.innerHTML = criarHoraDosSegundos(segundos)
    relogio.classList.remove('pausado');
    clearInterval(timer)
})
