const pg = require('pg');
const config = require("../config")
const client = new Client();

await client.connect(config.dbUrl);

const res = await client.query('SELECT $1::text as message', ['Hello world!']);

console.log(res.rows[0].message);

await client.end();