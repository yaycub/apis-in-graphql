const request = require('superagent');

const getAllNintendoChar = async() => {
  const { body } = await request.get('https://the-nintendo-api.herokuapp.com/api/v1/characters?perPage=10000');

  return body;
};

module.exports = {
  getAllNintendoChar
}; 
