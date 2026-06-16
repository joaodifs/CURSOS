function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        get: function() {
            return cpfEnviado .replace(/\D+/g,'')
        }
    });
}

ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    cpfParcial = this.cpfLimpo.slice(0,-2)
    digito1 = this.criaDigito(cpfParcial);
    digito2 = this.criaDigito(cpfParcial+digito1)
    const novoCpf = cpfParcial+digito1+digito2
    return novoCpf === this.cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
const cpfArray = Array.from(cpfParcial);
    const total = cpfArray.reduce((ac, val, i) => ac += val*(cpfParcial.length+1-i),0)
    const digito = 11 - (total%11)
    console.log(digito)
    return digito > 9 ? '0' : String(digito)
}

const cpf = new ValidaCPF('154.665.706-13');

console.log(cpf.valida());