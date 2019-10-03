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

  router.get("/users/:id", (req, res) => {
    const id = req.params.id;
    db.query(
      `SELECT * FROM users WHERE id = $1;`,[id])
      .then(({ rows: user }) => {
        res.json(user)
      });
  });

  return router
}
