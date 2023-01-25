const fetchPokemon = (pokemonName) => {
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
    return pokemon
  });
};

// fetchPokemon('charizard')
// .then((pokemon) => console.log(pokemon))

module.exports = fetchPokemon;