'use strict';

const pgs = require('pg-stats');

exports.handler = (event, content, callback) => {
  const cn = process.env.PG_CONNECT_STRING
  if (typeof cn === 'undefined') {
    return callback(new Error(`Don't export PostgreSQL connect string like "postgres://user:password@host:port/database" to "PG_CONNECT_STRING"`), 'error');
  }

  pgs(cn).then(results => {
    callback(null, results);
  }).catch(error => {
    callback(error, 'error');
  });
}
