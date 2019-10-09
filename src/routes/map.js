const router = require("express").Router();

module.exports = (query) => {

  router.get("/map", (req, res) => {
    query.getMapData()
      .then(map => res.json(map))
      .catch(error => console.log(error));
  });

  router.get("/mapApiKey", (req, res) => {
    let mapApiKey = (process.env.apiKey)
    res.json(mapApiKey)
  });

  return router
}
