const { buildSchema } = require('graphql');

const futuramaSchema = buildSchema(`
    type Query {
      allFuturamaQuotes: [FuturamaQuote],
      futuramaQuoteByChar(character: String): [FuturamaQuote]
    },
    type FuturamaQuote {
      character: String
      quote: String
      image: String
    }
`);

module.exports = futuramaSchema;
