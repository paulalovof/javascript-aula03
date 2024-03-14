function dividir(dividendo, divisor){
    if(divisor === 0){
        throw new Error("Divisao por zero não é permitida!");
    }
    return dividendo / divisor;
}

module.exports = dividir;