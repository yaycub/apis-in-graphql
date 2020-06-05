const express = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const PORT = process.env.PORT || 8888;

//Schemas
const futuramaSchema = require('./lib/models/Futurama');
const pokemonSchema = require('./lib/models/Pokemon');
const nintendoSchema = require('./lib/models/Nintendo');
const queries = require('./lib/models/Query');


//Routes
const { 
  getAllFuturamaQuotes, 
  getQuoteByChar, 
  getQuoteByCharWithCount, 
  getAllFuturamaCharacters } = require('./lib/routes/futurama');

const { 
  getAllPokemon, 
  getPokemonById,
  getPokemonByType } = require('./lib/routes/pokemon');

const { getAllNintendoChar } = require('./lib/routes/nintendo');

const app = express();

const root = {
  allFuturamaQuotes: getAllFuturamaQuotes,
  futuramaQuoteByChar: getQuoteByChar,
  futuramaQuoteByCharByCount: getQuoteByCharWithCount,
  allFuturamaCharacters: getAllFuturamaCharacters,
  allPokemon: getAllPokemon,
  pokemonById: getPokemonById,
  pokemonByType: getPokemonByType,
  allNintendoChar: getAllNintendoChar
};

app.use('/graphql', express_graphql({
  schema: buildSchema(queries + futuramaSchema + pokemonSchema + nintendoSchema),
  rootValue: root,
  graphiql: true
}));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});
