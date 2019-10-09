const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
const db = require("./db");

const query = require("./db/queries")(db)

const users = require("./routes/users");
const events = require("./routes/events");
const bars = require("./routes/bars");
const map = require("./routes/map");

function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: "utf-8"
      },
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  });
}


module.exports = function application(
  ENV,
  actions = { updateUsers: () => {}, updateEvents: () => {}, updateBars: () => {}}
) {
  app.use(cors());
  app.use(helmet());
  app.use(bodyparser.json());

  app.use("/api", users(query));
  app.use("/api", events(query));
  app.use("/api", bars(query));
  app.use("/api", map(query));

  

  

  if (ENV === "development" || ENV === "test") {
    Promise.all([
      read(path.resolve(__dirname, `db/schema/create.sql`)),
      read(path.resolve(__dirname, `db/seeds/seeds.sql`))
    ])
      .then(([create, seed]) => {
        app.get("/api/debug/reset", (request, response) => {
          db.query(create)
            .then(() => db.query(seed))
            .then(() => {
              console.log("Database Reset");
              response.status(200).send("Database Reset");
            });
        });
      })
      .catch(error => {
        console.log(`Error setting up the reset route: ${error}`);
      });
  }

  app.close = function() {
    return db.end();
  };

  return app;
};
