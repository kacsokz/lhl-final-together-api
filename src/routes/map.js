const router = require("express").Router();

module.exports = (query) => {

  // send maps locations to the front end

  router.get("/map", (req, res) => {
    query.getMapData()
      .then(map => res.json(map))
      .catch(error => console.log(error));
  });

  // on get maps data the apiKey will be sent to the google map component to render
  router.get("/mapApiKey", (req, res) => {
    let mapApiKey = (process.env.apiKey)
    res.json(mapApiKey)
  });

  return router
}
