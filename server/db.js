const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'development',
  host: 'localhost',
  post: '5432',
  database: 'perntodo',
});

module.exports = pool;