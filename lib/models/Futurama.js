const { buildSchema } = require('graphql');

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

module.exports = futuramaSchema;
