const pg = require('pg');
const config = require("../config")

const client = new Client({
  connectionString: process.env.DATABASE_URL || ""
});

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
