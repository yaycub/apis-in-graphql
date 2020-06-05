const request = require('superagent');

const getAllFuturamaQuotes = async() => {
  const { body } = await request.get('http://futuramaapi.herokuapp.com/api/quotes/200');

  return body;
};

const getQuoteByChar = async(arg) => {
  const { character } = arg;
  const { body } = await request.get(`http://futuramaapi.herokuapp.com/api/characters/${character}`);

  return body;
};

const getQuoteByCharWithCount = (arg) => {
  const { character, count } = arg;
  return request.get(`http://futuramaapi.herokuapp.com/api/characters/${character}/${count}`)
    .then(quotes => quotes.body);
};

module.exports = {
  getAllFuturamaQuotes,
  getQuoteByChar,
  getQuoteByCharWithCount
};
