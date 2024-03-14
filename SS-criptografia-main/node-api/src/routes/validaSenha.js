function validacao(senha){
    //senha com min de 8 caracateres, letras e numeros
    const padraoNumero = /\d+/;
    const tamanhoMin = senha.length;

    if(senha.match(padraoNumero) && tamanhoMin >= 8){
        return "Senha válida!"
    }else{
        throw new Error("Senha inválida!");
    }
}

module.exports = validacao;