const request = require('request');
const cheerio = require('cheerio');

class BaseDAO {
  constructor() {
    this.request = request;
    this.cheerio = cheerio;
    // this.model = {};
  }

  // findAll() {
  //   return [];
  // }
  //
  // findOneById() {
  //   return this.model.findAll();
  // }
}

module.exports = BaseDAO;
