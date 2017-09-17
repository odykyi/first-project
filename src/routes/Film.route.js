// const BaseRoute = require('./Base.route');
// const { filmService } = require('../services/index.service');
const FilmService = require('../services/Film.service');

class FilmRoute {
  constructor(router) {
    this.filmService = new FilmService();

    return this.init(router);
  }
  init(router) {
    // router.get('/', (req, res) => {
    //   // console.log('Films list');
    //   res.send('Films list');
    // });

    router.get('/getList', this.filmService.getList.bind(this.filmService));

    return router;
  }
}

module.exports = FilmRoute;

