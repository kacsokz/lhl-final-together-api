const router = require("express").Router();

module.exports = (db, updateBars) => {
  router.get("/bars", (req, res) => {
    db.query(
      `SELECT * FROM bars`
    )
    .then(({ rows: bars }) => {
      res.json(bars)
    });
  });
  return router
}
