const IndexRoute = require('./routes/index.route');
const express = require('express');
global.Promise = require('bluebird');

const app = new IndexRoute(express);

app.set('port', (process.env.PORT || 5000));

const server = app.listen(app.get('port'), () => {
  console.log('Express app running on port %s', app.get('port'));
});

