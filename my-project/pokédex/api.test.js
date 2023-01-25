const fetchPokemon = require('./api')

describe('Pokedex', () => {
  it('Can fetch the data for Charizard', (done) => {
    fetchPokemon('charizard')
      .then((pokemon) => {
        expect(pokemon.name).toEqual('charizard');
        done();
      });
  });

  it('Can fetch the data for Jigglypuff', (done) => {
    fetchPokemon('jigglypuff')
      .then((pokemon) => {
        expect(pokemon.id).toEqual(39);
        done();
      });
  });
});