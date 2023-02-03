const Pokedex = require('./pokedex')

describe('Pokedex', () => {
  it('Returns the pokemon in the pokedex once is catched', (done) => {
    const pokedex = new Pokedex();
    pokedex.catch('pikachu')
      .then((pokemon) => {
        expect(pokedex.all()).toEqual([
          {
            name: 'pikachu',
            id: 25,
            height: 4,
            weight: 60,
            types: [ 'electric' ]
          }]);
        done();
      });
  });

  // Sort it out later
  // it('Returns the pokemon in the pokedex once is catched', (done) => {
  //   const pokedex = new Pokedex();
  //   pokedex.catch('pikachu')
  //     .then(() => pokedex.catch('jigglypuff'))
  //     .then(() => pokedex.catch('eevee'))
  //     .then((pokemon) => {
  //       expect(pokemon.all()[0].name).toBe('pikachu');
  //       expect(pokemon.all()[1].name).toBe('jigglypuff');
  //       done();
  //     });
  // });
});