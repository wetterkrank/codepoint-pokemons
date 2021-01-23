const FIRST = 1;
const LAST = 898; // Excluding the extra pokemons with indexes 1000+

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function getMovesInfo(moveURLs) {
  // TODO: Explicitly sort results by move id?
  const responses = moveURLs.map(url => fetch(url).then(response => response.json()));
  let results = await Promise.all(responses);
  results = results.map((res) => ({
    name: res.names.find(x => x.language.name === 'en').name,
    accuracy: res.accuracy,
    power: res.power,
    key: res.id
  }));
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
    types: data.types.map(one => ({ key: one.slot, name: one.type.name })), // Array of objects {key: ..., name: ...}
    spriteURL: data.sprites.front_default,
    moves: await getMovesInfo(moveURLs), // Array of objects {key: ..., name: ..., accuracy: ..., power: ...}
    next: (data.id + 1 > LAST ? null : data.id + 1),
    prev: (data.id - 1 < FIRST || data.id - 1 > LAST ? null : data.id - 1)
  }

  return pokemonInfo;
}

export { getPokemonInfo };
