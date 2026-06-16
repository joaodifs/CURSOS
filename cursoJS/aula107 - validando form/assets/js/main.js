class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario')
this.eventos();
    }

    eventos(){
this.formulario.addEventListener('submit', e => {
    this.handleSubmit(e);
})
    }
    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.camposSaoValidos()
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas){
            this.formulario.submit();
            alert('Enviado')
        }
    }

    camposSaoValidos(){
        let valid = true;

        for(let campo of this.formulario.querySelectorAll('.error-text')){
    campo.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText.replace(':','');
            if(!campo.value){
                this.criaErro(campo, `${label} não pode estar em branco`)
                valid = false
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;
            }
            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false
            }
        }
        return valid
    }

        senhasSaoValidas(){
        let valid = true;

const senha = this.formulario.querySelector('.senha')
const repetirSenha = this.formulario.querySelector('.repetir-senha')

if (senha.value !== repetirSenha.value){
    this.criaErro(repetirSenha, 'Senhas diferentes')
    valid = false;
}
if (senha.value.length <6 || senha.value.length > 12){
    this.criaErro(senha, 'Senha deve ter entre 6 e 12 caracteres.')
}
return valid;
    }

    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.after(div);
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value)
        if(!cpf.valida()){
            this.criaErro(campo, 'CPF invalido')
            return false
        }
        return true;
    }

    validaUsuario(campo){
        const usuario = campo.value
        if(usuario.length <3 || usuario.length >12){
            this.criaErro(campo, 'Usuario deve ter entre 3 e 12 caracteres')
            return false
        }
            return true
    }
}



const valida = new ValidaFormulario();