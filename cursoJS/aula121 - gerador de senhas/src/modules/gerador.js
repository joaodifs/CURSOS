const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaiuscula = () => String.fromCharCode(rand('A'.charCodeAt(0), 'Z'.charCodeAt(0) + 1));
const geraMinuscula = () => String.fromCharCode(rand('a'.charCodeAt(0), 'z'.charCodeAt(0) + 1));
const geraNumero = () => rand(0, 10).toString();
const simbolos = "!@#$%¨&*()_+-"
const geraSimbolo = () => simbolos.charAt(rand(0, simbolos.length))

export default function geraSenha(quant, minuscula, maiuscula, numero, simbolo) {
    let senha = '';
    quant = Number(quant)
    for (let i = 0; i < quant; i++) {
        maiuscula && (senha += geraMaiuscula());
        minuscula && (senha += geraMinuscula());
        numero && (senha += geraNumero());
        simbolo && (senha += geraSimbolo());
    }
    return senha.slice(0, quant)
}