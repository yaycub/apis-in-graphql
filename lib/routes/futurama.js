const request = require('superagent');

const getAllFuturamaQuotes = async() => {
  const { body } = await request.get('http://futuramaapi.herokuapp.com/api/quotes/200');
  

  return body;
};

module.exports = {
  getAllFuturamaQuotes
};
