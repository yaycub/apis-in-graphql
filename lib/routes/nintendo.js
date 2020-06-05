const request = require('superagent');

const getAllNintendoChar = async() => {
  const { body } = await request.get('https://the-nintendo-api.herokuapp.com/api/v1/characters?perPage=10000');

  return body;
};

const getNintendoByChar = ({ name }) => {
  return request
    .get(`http://the-nintendo-api.herokuapp.com/api/v1/characters?search=${name}`)
    .then(chars => chars.body);
};

const getNintendoCharById = ({ id }) => {
  return request
    .get(`http://the-nintendo-api.herokuapp.com/api/v1/characters/${id}`)
    .then(chars => chars.body);
};

const getAllNintendoGames = () => {
  return request
    .get('https://the-nintendo-api.herokuapp.com/api/v1/games?perPage=100000')
    .then(games => games.body);
};

const getNintendoGameByName = ({ name }) => {
  return request
    .get(`https://the-nintendo-api.herokuapp.com/api/v1/games?search=${name}`)
    .then(game => game.body);
};

module.exports = {
  getAllNintendoChar,
  getNintendoByChar,
  getNintendoCharById,
  getAllNintendoGames,
  getNintendoGameByName
}; 
