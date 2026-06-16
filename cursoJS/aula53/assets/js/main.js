const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'section', texto: 'Frase 3' },
    { tag: 'footer', texto: 'Frase 4' }
]

const div = document.querySelector('.conteudo');
for(let i = 0; i < elementos.length; i++){
    let tag = elementos[i].tag;
    let texto = elementos[i].texto;
    div.innerHTML += `<${tag}>${texto}</${tag}>`
}