const express = require('express');
const express_graphql = require('express-graphql');


//Schemas
const futuramaSchema = require('./lib/models/Futurama');

//Routes
const { getAllFuturamaQuotes } = require('./lib/routes/futurama');

const app = express();

const PORT = process.env.PORT || 8888;


 
const root = {
  allFuturamaQuotes: getAllFuturamaQuotes
};

app.use('/futurama', express_graphql({
  schema: futuramaSchema,
  rootValue: root,
  graphiql: true
}));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});
