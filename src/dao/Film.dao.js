const BaseDAO = require('./Base.dao');


class FilmDAO extends BaseDAO {
  getList() {
    return Promise.resolve()
      .then(() => new Promise((resolve, reject) => {
        const url = 'https://www.kinopoisk.ru/top/';

        this.request(url, (error, response, html) => {
          if (error) {
            console.error('error');
            console.error('error', error);
            return reject(error);
          }
          return resolve(html);
        });
      }))
      .then((html) => {
        //
        console.log('gggggg');
        console.log('html', html);
        const $ = this.cheerio.load(html);

        let title;
        let release;
        let rating;

        const json = { title: '', release: '', rating: '' };

        $('.header').filter(function () {
          const data = $(this);
          title = data.children().first().text();

          release = data.children().last().children().text();

          json.title = title;
          json.release = release;
        });


        $('.star-box-giga-star').filter(function () {
          const data = $(this);


          rating = data.text();

          json.rating = rating;
        });
      });
  }
}

module.exports = FilmDAO;
