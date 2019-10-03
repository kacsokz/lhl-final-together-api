const router = require("express").Router();

module.exports = (query, updateEvents) => {
  router.get("/events", (req, res) => {
    const user_id = req.query && req.query.user_id;
    if (user_id) {
      query.getEventsByUserId(user_id)
        .then(events => res.json(events))
    } else {
      query.getEvents()
        .then(events => res.json(events))
    }
  });

  router.get("/events/list", (req, res) => {

    query.getEventsList()
      .then(event => res.json(event))
  });

  router.get("/events/:id", (req, res) => {
    const id = req.params.id;

    query.getEventById(id)
      .then(event => res.json(event))
  });

  


  return router
}
