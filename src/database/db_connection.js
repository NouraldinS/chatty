const { Pool } = require('pg');
const pg = require('pg');

console.log(pg);
require('env2')('./config.env');

if (!process.env.DATABASE_URL) throw new Error('Error connecting to db');

const dburl = process.env.DATABASE_URL;

module.exports = new Pool({ connectionSting: dburl, ssl: true });
