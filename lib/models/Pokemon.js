const pokemonSchema = `
    type Pokemon {
      _id: String
      pokemon: String
      id: Int
      species_id: Int
      height: Int
      weight: Int
      base_experience: Int
      type_1: String
      type_2: String
      attack: Int
      defense: Int
      hp: Int
      special_attack: Int
      special_defense: Int
      speed: Int
      ability_1: String
      ability_2: String
      ability_hidden: String
      color_1: String
      color_2: String
      color_f: String
      egg_group_1: String
      egg_group_2: String
      url_image: String
      generation_id: Int
      evolves_from_species_id: String
      evolution_chain_id: Int
      shape_id: Int
      shape: String
      pokebase: String
      pokedex: String
    }
`;

module.exports = pokemonSchema;
