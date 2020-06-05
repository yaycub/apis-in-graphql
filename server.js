const express = require('express');
const express_graphql = require('express-graphql');
const request = require('superagent');
const { buildSchema } = require('graphql');

const app = express();

const futuramaSchema = buildSchema(`
    type Query {
      allFuturamaQuotes: [FuturamaQuote]
    },
    type FuturamaQuote {
      character: String
      quote: String
      image: String
    }
`);

const PORT = process.env.PORT || 8888;

const getAllFuturamaQuotes = async() => {
  const { body } = await request.get('http://futuramaapi.herokuapp.com/api/quotes/200');
  

  return body;
};
 
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
