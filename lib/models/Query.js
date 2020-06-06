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
  
  allNintendoChar: [nintendoChar]
  nintendoByChar(name: String): [nintendoChar]
  nintendoById(id: String): nintendoChar
  allNintendoGames: [nintendoGame]
  nintendoByGame(name: String): [nintendoGame]
  nintendoGameById(id: String): nintendoGame
}`;

module.exports = queries;
