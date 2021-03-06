const router = require("express").Router();

module.exports = (query, updateUsers) => {
  router.get("/users", (req, res) => {
    query.getUsers()
      .then(users => res.json(users))
  });

  router.put("/users/:id", (req, res) => {
    const user_id = req.params.id;
    const email = req.body.email
    const tagLine = req.body.tagLine
    query.updateUserInfo(user_id, email, tagLine)
      .then(user => res.json(user))
      .catch(error => console.log(error));
  });

  router.put("/users/join/:id", (req, res) => {
    const user_id = req.params.id;
    const event_id = req.body.event_id
    const bar_id = req.body.bar_id
    query.joinEvent(user_id, event_id, bar_id)
      .then(user => res.json(user))
      .catch(error => console.log(error));
  });

  router.get("/users/:id", (req, res) => {
    const user_id = req.params.id;
    query.getUserById(user_id)
      .then(user => res.json(user))
      .catch(error => console.log(error));
  });

  router.post("/users/:id", (req, res) => {
    const user_id = req.params.id;
    query.deleteUserTagLine(user_id)
      .then(user => res.json(user))
      .catch(error => console.log(error));
  });

  router.delete("/users/event/:id", (req, res) => {
    const event_id = req.params.id;
    query.deleteUserEvent(event_id)
      .then(event => res.json(event))
      .catch(error => console.log(error));
  });

  router.put("/users/event/new/:id", (req, res) => {
    //creating new event for the signed in user
    const templateVars = {
      user_id: req.body.id,
      bar_id: req.body.bar_id,
      event_name: req.body.name,
      event_date: req.body.date,
      event_start_time: req.body.start,
      event_end_time: req.body.end,
      event_tag_line: req.body.tag
    };
    query.createUserEvent(templateVars)
      .then(event => res.json(event))
      .catch(error => console.log(error));
  });

  return router
}
