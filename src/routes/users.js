const router = require("express").Router();

module.exports = (query, updateUsers) => {
  router.get("/users", (req, res) => {
    query.getUsers()
      .then(users => res.json(users))
  });

  router.get("/users/:id", (req, res) => {
    const id = req.params.id;
    query.getUserById(id)
      .then(user => res.json(user))
  });

  return router
}
