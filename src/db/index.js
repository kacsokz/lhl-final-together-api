const pg = require("pg");

// connect to local or production database 
let dbParams = "";
if (process.env.NODE_ENV === "production") {
  dbParams = process.env.DATABASE_URL;
}
const client = new pg.Client({
  connectionString: dbParams, ssl: true
});


client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;