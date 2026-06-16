const h1 = document.getElementById('h1data');

let data = new Date();
function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() +1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    let diaSemana = data.getDay();
    diaSemana = formataDia(diaSemana);
return `${diaSemana}, ${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

function formataDia(diaSemana){
        switch(diaSemana){
            case 0:
            diaSemana = 'Domingo';
            break;
            case 1:
            diaSemana = 'Segunda';
            break;
            case 2:
            diaSemana = 'Terça';
            break;
            case 3:
            diaSemana = 'Quarta';
            break;
            case 4:
            diaSemana = 'Quinta';
            break;
            case 5:
            diaSemana = 'Sexta';
            break;
            case 6:
            diaSemana = 'Sábado';
            break;
        }
        return diaSemana;
    }

function zeroAEsquerda(num){
return num >= 10 ? num : `0${num}`
}
data = formataData(data);
h1.innerHTML = `${data} 
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque ducimus voluptate quos maiores rem, ex odio vero accusantium distinctio eius facere sapiente ipsam in earum, fuga pariatur minima. Ad, quod!`;