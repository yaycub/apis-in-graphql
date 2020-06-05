const request = require('superagent');

const getAllPokemon = async() => {
  const { body } = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');

  return body.results;
};

const getPokemonById = async(arg) => {
  const { _id } = arg;
  const { body } = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${_id}`);

  return body;
};

module.exports = {
 getAllPokemon,
 getPokemonById
};
