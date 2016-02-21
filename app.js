'use strict';

// require('babel-register');
// require('./src/server/index.js');
require('babel-core/register')({});
require('babel-polyfill');
var server = require('./src/server/index').default;

const PORT = process.env.PORT || 3000;

server.listen(PORT, function () {
  console.log('Server listening on: ' + PORT);
});