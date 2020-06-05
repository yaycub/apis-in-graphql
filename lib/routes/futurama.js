const request = require('superagent');

const getAllFuturamaQuotes = async() => {
  const { body } = await request.get('http://futuramaapi.herokuapp.com/api/quotes/200');

  return body;
};

const getQuoteByChar = async(arg) => {
  const { character } = arg;
  const { body } = await request.get(`futuramaapi.herokuapp.com/api/characters/${character}`);

  return body;
};

module.exports = {
  getAllFuturamaQuotes,
  getQuoteByChar
};
