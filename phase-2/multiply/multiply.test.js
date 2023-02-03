const multiply = require('./multiply')

describe('multiply', () => {
  it('Multiplies 2 and 2', () => {
    expect(multiply(2, 2)).toBe(4);
    expect(multiply(5, 0)).toBe(0);
  });
});