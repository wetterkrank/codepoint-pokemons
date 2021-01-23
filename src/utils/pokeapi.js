
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function getMovesInfo(moveURLs) {
  // TODO: Explicitly sort results by move id?
  const responses = moveURLs.map(url => fetch(url).then(response => response.json()));
  let results = await Promise.all(responses);
  results = results.map((res) => 
    ({
      name: res.names.find(x => x.language.name === 'en').name,
      accuracy: res.accuracy,
      power: res.power
    })
  );
  return results;
}

async function getPokemonInfo(query) {
  // TODO: Add query validation?
  const url = `https://pokeapi.co/api/v2/pokemon/${query}/`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();
  const moveURLs = data.moves.slice(0, 3).map(one => one.move.url);

  const pokemonInfo = {
    id: data.id, // Number
    name: capitalize(data.name), // TODO: Get the species name in English instead?
    types: data.types.map(one => one.type.name), // String array
    spriteURL: data.sprites.front_default,
    moves: await getMovesInfo(moveURLs) // Array of 3 objects
  }

  return pokemonInfo;
}

export { getPokemonInfo };