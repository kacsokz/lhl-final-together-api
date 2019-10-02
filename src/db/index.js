const pg = require("pg");
require('dotenv').config();

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL || "", ssl: true
});

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;