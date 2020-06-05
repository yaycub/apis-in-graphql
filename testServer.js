const express = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

const schema = buildSchema(`
    type Query {
      rickAndMorty(age: Int, name: String): RickAndMorty
      rickAndMortys: RickAndMorty
    },
    type RickAndMorty {
      name: String
      species: String
      age: Int
    }
`);

const apiData = [
  {
    name: 'Rick',
    species: 'Human',
    age: 40
  },
  {
    name: 'morty',
    species: 'Human',
    age: 14
  }
];

const getChar = (args) => {
  const { age, name } = args;
  

  return apiData.filter(data => data.name === name)[0];
};

const rickandMorty = () => {
  request.get();
};
const root = {
  message: () => 'whatever',
  rickAndMorty: getChar,
};



app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
