const dividir = require('./matematica');

test('Lança uma exceção ao dividir por zero', () => {
    expect(() => dividir(5, 0)).toThrow("Divisao por zero não é permitida!");
});