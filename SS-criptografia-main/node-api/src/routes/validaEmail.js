function validacao(email){
    if(email.includes("@") && email.includes(".com")){
        return "Email válido!"
    }else{
        throw new Error("Email inválido!");
    }
}

module.exports = validacao;