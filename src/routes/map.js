const router = require("express").Router();

module.exports = (db) => {
  router.get("/map", (req, res) => {
    db.query(
      `SELECT id, longitude, latitude FROM bars`
    )
    .then(data => {
      let map = (data.rows)
      // let apiKey = 0
      res.json(map)
    });
  });

  router.get("/mapApiKey", (req, res) => {
      let mapApiKey = (process.env.apiKey)
      res.json(mapApiKey)
    });
  return router
}
