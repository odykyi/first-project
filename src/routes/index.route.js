const FilmRoute = require('./Film.route');

class IndexRoute {
  constructor(express) {
    const app = express();
    const router = express.Router();

    return this.init(app, router);
  }

  init(app, router) {
    app.use('/film', new FilmRoute(router));
    // app.use('/user', new UserRoute(router));

    return app;
  }
}

module.exports = IndexRoute;
