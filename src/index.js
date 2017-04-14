'use strict';

const pgs = require('pg-stats');
const schema = require('./schema');
const bq = require('./bq');

exports.handler = (event, content, callback) => {
  const cn = process.env.PG_CONNECT_STRING
  if (typeof cn === 'undefined') {
    return callback(new Error(`Don't export PostgreSQL connect string like "postgres://user:password@host:port/database" to "PG_CONNECT_STRING"`), 'error');
  }

  pgs(cn).then(results => {
    const key = Object.keys(results)[1];
    return bq(results[key], schema(key)).then(data => {
      return callback(null, 'success')
    }).catch(error => {
      throw error;
    });
  }).catch(error => {
    return callback(error, 'error');
  });
}
