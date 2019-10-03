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

  router.get("/bars/:id", (req, res) => {
    const id = req.params.id;
    db.query(
      `SELECT * FROM events e JOIN bars b ON b.id = e.bar_id WHERE b.id = $1;`,[id])
      .then(({ rows: bar }) => {
        res.json(bar)
      });
  });



  return router
}
