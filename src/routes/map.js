const router = require("express").Router();

module.exports = (query) => {

  router.get("/map", (req, res) => {
    query.getMapData()
      .then(map => res.json(map))
  });

  router.get("/mapApiKey", (req, res) => {
    let mapApiKey = (process.env.apiKey)
    res.json(mapApiKey)
  });

  return router
}
