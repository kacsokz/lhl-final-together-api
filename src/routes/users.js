const router = require("express").Router();

module.exports = (db, updateUsers) => {
  router.get("/users", (req, res) => {
    db.query(
      `SELECT * FROM users`
    )
    .then(({ rows: users }) => {
      res.json(users)
    });
  });

  return router
}
