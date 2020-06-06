require('dotenv').config();
const express = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const expressPlayground = require('graphql-playground-middleware-express').default;
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

const { 
  getAllNintendoChar, 
  getNintendoByChar,
  getNintendoCharById,
  getAllNintendoGames,
  getNintendoGameByName,
  getNintendoGameById } = require('./lib/routes/nintendo');

const app = express();

const root = {
  allFuturamaQuotes: getAllFuturamaQuotes,
  futuramaQuoteByChar: getQuoteByChar,
  futuramaQuoteByCharByCount: getQuoteByCharWithCount,
  allFuturamaCharacters: getAllFuturamaCharacters,
  allPokemon: getAllPokemon,
  pokemonById: getPokemonById,
  pokemonByType: getPokemonByType,
  allNintendoChar: getAllNintendoChar,
  nintendoByChar: getNintendoByChar,
  nintendoById: getNintendoCharById,
  allNintendoGames: getAllNintendoGames,
  nintendoByGame: getNintendoGameByName,
  nintendoGameById: getNintendoGameById
};

app.use('/graphql', express_graphql({
  schema: buildSchema(queries + futuramaSchema + pokemonSchema + nintendoSchema),
  rootValue: root,
  graphiql: true
}));

app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});

module.exports = app;
