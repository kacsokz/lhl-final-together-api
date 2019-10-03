module.exports = db => ({
  getEvents() {
    return db.query(
      `SELECT * FROM events`
    )
      .then(({ rows: events }) => events);
  },

  getEventsByUserId(user_id) {
    return db.query(
      `SELECT * FROM events Where user_id = $1;`, [user_id]
    )
      .then(({ rows: events }) => events);
  },

  getEventById(id) {
    return db.query(
      `SELECT * FROM events WHERE id = $1;`,[id])
      .then(({ rows }) => rows[0]);
  }  
})