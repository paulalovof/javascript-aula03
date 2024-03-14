const validacao = require('./validaEmail');

test('Validação de email - inválido', () => {
    expect(() => validacao("teste")).toThrow("Email inválido!");
});

test('Validação de email - inválido', () => {
    expect(() => validacao("teste@email")).toThrow("Email inválido!");
});

test('Validação de email - válido', () => {
    const result = validacao("teste@email.com")
    expect(result).toBe("Email válido!");
})