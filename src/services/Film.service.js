const BaseService = require('./Base.service');
// const { filmDAO } = require('../dao/index.dao');
const FilmDAO = require('../dao/Film.dao');

class FilmService extends BaseService {
  constructor() {
    super();
    this.filmDAO = new FilmDAO();
  }

  getList(req, res) {
    const list = this.filmDAO.getList();
    return res.json({
      data: list,
    });
  }
}

module.exports = FilmService;
