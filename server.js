require('dotenv').config();

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV


const app = require("./src/application")(ENV);
// const server = require("http").Server(app);

app.listen(PORT, () => console.log("Im listening on " + PORT))