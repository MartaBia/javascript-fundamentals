const Candy = require('./candy')

describe('Candy', () => {
  it('construct', () => {
    let candy = new Candy('Mars', 4.99);

    expect(candy.getName()).toBe('Mars');
    expect(candy.getPrice()).toBe(4.99);
  });
});