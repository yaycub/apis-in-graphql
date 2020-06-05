const queries = `
type Query {
  allFuturamaQuotes: [FuturamaQuote],
  futuramaQuoteByChar(character: String): [FuturamaQuote]
  futuramaQuoteByCharByCount(character: String, count: Int): [FuturamaQuote]
  allFuturamaCharacters: [FuturamaCharacter]
  futuramaCharacterSearch: [FuturamaCharacter]
  allPokemon: [Pokemon]
  pokemonById(_id: String): Pokemon
  pokemonByType: [PokemonTypes]
}`;

module.exports = queries;
