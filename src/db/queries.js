module.exports = db => ({

  getBars() {
    return db.query(
      `SELECT * FROM bars`
    )
      .then(({ rows: bars }) => bars)
  },

  getBarById(id) {
    return db.query(
      `SELECT * FROM events e JOIN bars b ON b.id = e.bar_id WHERE b.id = $1;`, [id])

      .then(({ rows: bar }) => bar)
  },

  getUsers() {
    return db.query(
      `SELECT * FROM users`
    )
      .then(({ rows: users }) => users);
  },

  getUserById(id) {
    return db.query(
      `SELECT * FROM users WHERE id=$1`, [id]
    )
      .then(({ rows: users }) => users);
  },

  getEvents() {
    return db.query(
      `SELECT * FROM events`
    )
      .then(({ rows: events }) => events);
  },

  getEventsByUserId(user_id) {
    return db.query(
      `SELECT * FROM events JOIN users ON users.id = events.user_id Where user_id = $1;`, [user_id]
    )
      .then(({ rows: events }) => events);
  },

  getEventById(id) {
    return db.query(
      `SELECT 
      events.id AS event_id,
          (SELECT first_name || ' ' || last_name FROM users where users.id=events.user_id) AS host_name,
          (SELECT name FROM bars where id=event_attendees.bar_id) AS bar_name, 
          (SELECT latitude FROM bars where id=event_attendees.bar_id) AS latitude,
          (SELECT longitude FROM bars where id=event_attendees.bar_id) AS longitude,
          events.name AS event_name,
          events.date AS event_date, events.start_time AS event_start_time,
          events.end_time AS event_end_time, events.tag_line AS event_tag_line,
          count(event_attendees.*) AS attendees_count
      FROM event_attendees, users, events
      WHERE users.id = event_attendees.user_id
         AND events.id = $1
      GROUP BY event_attendees.event_id, event_attendees.bar_id, events.name, events.date, events.start_time, events.end_time, events.tag_line, events.id
      `, [id])
      .then(({ rows }) => rows[0]);
  },

  getMapData() {
    return db.query(
      `SELECT id, longitude, latitude FROM bars`
    )
      .then(({ rows: map }) => map);
  },

  getEventsList() {
    return db.query(
      `SELECT 
      events.id AS event_id,
          (SELECT name FROM bars where id=event_attendees.bar_id) AS bar_name, 
          (SELECT latitude FROM bars where id=event_attendees.bar_id) AS latitude,
          (SELECT longitude FROM bars where id=event_attendees.bar_id) AS longitude,
          events.name AS event_name,
          events.date AS event_date, events.start_time AS event_start_time,
          events.end_time AS event_end_time, events.tag_line AS event_tag_line,
          count(event_attendees.*) AS attendees_count
      FROM event_attendees, users, events
      WHERE users.id = event_attendees.user_id
         AND events.id = event_attendees.event_id
      GROUP BY event_attendees.event_id, event_attendees.bar_id, events.name, events.date, events.start_time, events.end_time, events.tag_line, events.id
      `
    )
      .then(({ rows: events }) => events);
  }
})