const futuramaSchema = `
    type FuturamaQuote {
      character: String
      quote: String
      image: String
    },
    type FuturamaCharacter {
      Name: String
      VoicedBy: String
      FirstAppearance: String
    }
`;

module.exports = futuramaSchema;
