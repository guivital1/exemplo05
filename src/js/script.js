//DECLARANDO AS VARIAVEIS
const form  =document.getElementById("form")
const nome  =document.getElementById("nome")
const email =document.getElementById("email")
const senha =document.getElementById("senha")

//EVENTO QUE VAI PEGAR O QUE ACONTECER NO FORMULARIO

form.addEventListener('submit',(e)=>{
    //PREVINE QUALQUER ALTERAÇÃO NO FORMULÁRIO
    e.preventDefault()

    //CHAMAR A FUNÇÃO QUE VAI CHECAR OS CAMPOS
    checarCampos()
})

//FUNÇÃO CHECAR CAMPOS
function checarCampos(){
    //DECLARANDO AS VARIAVEIS
    // O METODO TRIM REMOVE ESPAÇOS EM BRANCO NO INICIO E NO FIM DO TEXTO
    const nomeValor = nome.value.trim()
    const emailValor = email.value.trim()
    const senhaValor = senha.value.trim()

    //SE O CAMPO NOME ESTIVER VAZIO
    if(nomeValor ===""){
       validarErro(nome,"Preencha o campo nome")
    }
    else{
        validarSucesso(nome)
    }

    //SE O CAMPO EMAIL ESTIVER VAZIO

    if(emailValor === ""){
        validarErro(email, "Preencha o campo email")
    }
    else{   
        validarSucesso(email)
    }

    //SE O CAMPO SENHA ESTIVER VAZIO

    if(senhaValor === ""){
        validarErro(senha,"Preencha o campo senha")
    }
    else if(senhaValor.length < 8)
    {
        validarErro(senha,"A senha deve ter mais que 8 caracteres")
    }else{
        validarSucesso(senha)
    }

} 

// Validar error

    function validarErro(input,message){
        //  retorna para o elemento pai
        const controle = input.parentElement;
        // pega o primeiro elemento small que o select encontrar
        const small = controle.querySelector('small')
        // pega a mensagem no campo em caso de erro
        small.innerText = message
        // pega as configurações de css da classe controle e error
        controle.className = "controle error"
    }



//validar sucesso
    function validarSucesso(){



    }