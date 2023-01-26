class Pokedex {
  constructor() {
    this.pokedex = [];
  };

  catch(pokemonName) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => {
      let pokemon = {
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
        types: data.types.map((element) => {
          return element.type.name;
        })
      };
      this.pokedex.push(pokemon);
    });
  };

  all() {
    return this.pokedex;
  };
};

pokedex = new Pokedex();
pokedex.catch('pikachu')
  .then(() => pokedex.catch('jigglypuff'))
  .then(() => pokedex.catch('eevee'))
  .then(() => {
    console.log('Patient', pokedex.all()); // Prints only after waiting for the api request as it is iside a .then method
  })
//Print without waiting for the API request:
console.log('Eager', pokedex.all());

module.exports = Pokedex;