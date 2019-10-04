const router = require("express").Router();

module.exports = (query) => {
  router.get("/bars", (req, res) => {
    query.getBars()
      .then(bars => res.json(bars))
  });


  router.get("/bars/:id", (req, res) => {
    const id = req.params.id;
    query.getBarById(id)
      .then(bar => res.json(bar))
      .catch(error => console.log(error));
  });


  return router
}
