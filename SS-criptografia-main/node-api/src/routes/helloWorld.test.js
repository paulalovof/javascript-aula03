const helloWorld = require('./helloWorld');

test('should return "Hello, World!"', () => {
    const result = helloWorld();

    //se é estritamente igual a string
    expect(result).toBe('Hello, World!');
})