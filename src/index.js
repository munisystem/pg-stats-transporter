'use strict';

const delay = require('delay');

const pgs = require('pg-stats');
const schema = require('./schema');
const bq = require('./bq');

exports.handler = (event, content, callback) => {
  const cn = process.env.PG_CONNECT_STRING
  if (typeof cn === 'undefined') {
    return callback(new Error(`Don't export PostgreSQL connect string like "postgres://user:password@host:port/database" to "PG_CONNECT_STRING"`), 'error');
  }

  return insertBQ(cn)
}

async function insertBQ(cn) {
  try {
    const results = await pgs(cn)
    for (const key of Object.keys(results)) {
      console.log('Insert: ' + key);
      const v = results[key];
      if (v.length === 0) {
        continue;
      }
      await bq(v, key, schema(key));
      await delay(1000);
    }
    return callback()
  } catch(error) {
    throw error;
  }
}
