const validacao = require('./validaSenha');

test('Validação de senha - inválido', () => {
    //senha com menos de 8 caracteres
    expect(() => validacao("abc123")).toThrow("Senha inválida!");
});

test('Validação de senha - inválido', () => {
    //senha sem números
    expect(() => validacao("abcdefgh")).toThrow("Senha inválida!");
});

test('Validação de senha - válido', () => {
    const result = validacao("senha123")
    expect(result).toBe("Senha válida!");
})