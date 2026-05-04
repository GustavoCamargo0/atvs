const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'senai',
  password: 'senai',
  port: '5433',
});

module.exports = pool;