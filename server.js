const express = require('express');
const express_graphql = require('express-graphql');
const PORT = process.env.PORT || 8888;

//Schemas
const schema = require('./lib/models/Schema');

//Routes
const { getAllFuturamaQuotes, getQuoteByChar } = require('./lib/routes/futurama');


const app = express();

const root = {
  allFuturamaQuotes: getAllFuturamaQuotes,
  futuramaQuoteByChar: getQuoteByChar
};

app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});
