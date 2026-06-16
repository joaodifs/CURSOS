class ValidaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }
    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        console.log('oi')
        if(this.cpfLimpo.length !== 11) return false;
        const novoCpf = this.criarNovoCpf()
        console.log(novoCpf + ' a aaaaa')
        novoCpf !== this.cpfLimpo ? console.log('Invalidado') :  console.log('Validado')
    }

    criaDigito(cpfNovo){
        let total = 0;
        let tam = cpfNovo.length+1;
        console.log(tam)
        console.log(cpfNovo)
        for (let pos of cpfNovo){
            total += tam*Number(pos)
            tam--;
        }
        const digito = 11 - (total%11)
        return digito <=9 ? String(digito) : '0';
    }

    criarNovoCpf(){
        let cpfNovo = this.cpfLimpo.slice(0, -2);
        let digito = this.criaDigito(cpfNovo);
        cpfNovo+=digito;
        digito = this.criaDigito(cpfNovo);
        cpfNovo += digito;
        return cpfNovo;
    }
}

const validaCpf = new ValidaCPF('154.665.706-13')
validaCpf.valida();