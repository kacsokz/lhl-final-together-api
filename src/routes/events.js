const router = require("express").Router();

module.exports = (db, updateEvents) => {
  router.get("/events", (req, res) => {
    db.query(
      `SELECT * FROM events`
    )
      .then(({ rows: events }) => {
        res.json(events)
      });
  });

  router.get("/events/:id", (req, res) => {
    const id = req.params.id;

    db.query(
      `SELECT * FROM events WHERE id = $1;`,[id])
      .then(({ rows: event }) => {
        res.json(event)
      });
  });


  return router
}
