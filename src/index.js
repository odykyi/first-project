const IndexRoute = require('./routes/index.route');
const express = require('express');
global.Promise = require('bluebird');

const app = new IndexRoute(express);

const server = app.listen(3000, () => {
  console.log('Express app running on port %s', server.address().port);
});

