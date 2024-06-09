const holaMundo = require('../src/Hola');

test('debe retornar "Hola, mundo"', () => {
    expect(holaMundo()).toBe("Hola, mundo");
});