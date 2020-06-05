const request = require('superagent');

const getAllNintendoChar = async() => {
  const { body } = await request.get('https://the-nintendo-api.herokuapp.com/api/v1/characters?perPage=10000');

  return body;
};

const getNintendoByChar = ({ name }) => {
  console.log(name);
  return request
    .get(`http://the-nintendo-api.herokuapp.com/api/v1/characters?search=${name}`)
    .then(chars => chars.body);
};

module.exports = {
  getAllNintendoChar,
  getNintendoByChar
}; 
