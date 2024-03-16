const usuarios = [
    ["joao@gmail.com", "123456"],
    ["abel@gmail.com", "deusefiel"],
    ["maria@gmail.com", "456789"],
    ["antonio@gmail.com", "euamominhamae"],
    ["ana@gmail.com", "ana1996"],
    ["fapessis@hotmail.com", "Fp@x1234"]
    ]

    const email = document.querySelector("#email")
    const senha = document.querySelector("#senha")
    const botao = document.querySelector("#formulario")


    const resultado = document.querySelector("#resultado")


    function verificaEmail(event){
        event.preventDefault()
        const conteudoEmail = email.value
        const conteudoSenha = senha.value
        let validaEmail = false
        let validaSenha = false
    

        for (let usuario of usuarios) {
            if(conteudoEmail === usuario[0] && conteudoSenha === usuario[1]) {
                resultado.textContent = `Login efetuado com sucesso!`
                validaEmail = true
                validaSenha = true
                break
            } 
        }

        if(!validaEmail || !validaSenha){
            resultado.textContent = `ERROR!`

        }

    
    }
    
    botao.addEventListener("submit", verificaEmail)