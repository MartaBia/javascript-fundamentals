const Pokedex = require('./pokedex')

describe('Pokedex', () => {
  it('Can fetch the data for Jigglypuff', (done) => {
    const pokedex = new Pokedex();
    pokedex.getByNumber(39)
      .then((pokemon) => {
        expect(pokemon.name).toEqual('jigglypuff');
        done();
      });
  });
});