const ENV = process.env.NODE_ENV || 'development'
const dotEnvFilePath = __dirname + '/.env.' + ENV
require('dotenv').config({ path: dotEnvFilePath });

const PORT = process.env.PORT || 3000;


const app = require("./src/application")(ENV);
// const server = require("http").Server(app);

app.listen(PORT, () => console.log("Im listening on " + PORT))