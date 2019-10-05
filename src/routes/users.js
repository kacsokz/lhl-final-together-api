const router = require("express").Router();

module.exports = (query, updateUsers) => {
  router.get("/users", (req, res) => {
    query.getUsers()
      .then(users => res.json(users))
      .catch(error => console.log(error));
  });

  router.post("/users/:id", (req, res) => {
    const templateVars = {
      user_id: req.params.id,
      user_email: req.body.user_email,
      event_tag_line: req.body.event_tag_line
    };
    query.updateProfile(templateVars)
      .then(user => res.json(user))
      .catch(error => console.log(error));
  });

  // router.post("/users/:id/tagline", (req, res) => {
  //   const user_id = req.params.id;
  //   query.addTagLine(req.body.tag_line, user_id)
  //     .then(user => res.json(user))
  //     .catch(error => console.log(error));
  // });

  // router.post("/users/:id/email", (req, res) => {
  //   const user_id = req.params.id;
  //   query.updateEmail(req.body.email, user_id)
  //     .then(user => res.json(user))
  //     .catch(error => console.log(error));
  // });

  router.get("/users/:id", (req, res) => {
    const user_id = req.params.id;
    query.getUserById(user_id)
      .then(user => res.json(user))
      .catch(error => console.log(error));
  });

  // router.post("/users/:id", (req, res) => {
  //   const user_id = req.params.id;
  //   query.deleteUserTagLine(user_id)
  //     .then(user => res.json(user))
  //     .catch(error => console.log(error));
  // });

  router.post("/users/event/:id", (req, res) => {
    const user_id = req.params.id;
    query.deleteUserEvent(user_id)
      .then(event => res.json(event))
      .catch(error => console.log(error));
  });

  router.post("/users/event/new/:id", (req, res) => {

    const templateVars = {
      user_id: req.params.id,
      bar_id: req.body.bar_id,
      event_name: req.body.event_name,
      event_date: req.body.event_date,
      event_start_time: req.body.event_start_time,
      event_end_time: req.body.event_end_time,
      event_tag_line: req.body.event_tag_line
    };

    query.createUserEvent(templateVars)
      .then(event => res.json(event))
      .catch(error => console.log(error));
  });


  return router
}
