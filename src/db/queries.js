module.exports = db => ({

  getBars() {
    return db.query(
      `SELECT * FROM bars`
    )
      .then(({ rows: bars }) => bars)
      .catch(error => console.log(error));
  },

  getBarById(id) {
    return db.query(
      `SELECT * FROM events e JOIN bars b ON b.id = e.bar_id WHERE b.id = $1;`, [id])

      .then(({ rows: bar }) => bar)
      .catch(error => console.log(error));
  },

  getUsers() {
    return db.query(
      `SELECT * FROM users`
    )
      .then(({ rows: users }) => users)
      .catch(error => console.log(error));

  },

  getUserById(id) {
    return db.query(
      `SELECT * FROM users WHERE id=$1`, [id]
    )
      .then(({ rows: users }) => users)
      .catch(error => console.log(error));
  },

  getUserIdByEmail(email) {
    return db.query(
      `SELECT users.id FROM users WHERE email=$1`, [email]
    )
      .then(({ rows: id }) => id)
      .catch(error => console.log(error));
  },

  getEvents() {
    return db.query(
      `SELECT * FROM events`
    )
      .then(({ rows: events }) => events)
      .catch(error => console.log(error));
  },

  getEventsByUserId(user_id) {
    return db.query(
      `SELECT events.id AS event_id, events.user_id AS user_id, events.name AS
      event_name, events.date AS event_date, events.start_time AS event_start_time,
      events.end_time AS event_end_time, events.tag_line AS event_tag_line,
      users.first_name AS host_name, users.email AS email,
      users.avatar AS avatar,
      count(event_attendees.*) AS attendees_count
      FROM events
      JOIN users ON users.id = events.user_id
      JOIN event_attendees ON events.user_id = event_attendees.user_id
      WHERE events.user_id = $1
      GROUP BY events.id, users.first_name, users.email, users.avatar;`, [user_id]
    )
      .then(({ rows: events }) => events)
      .catch(error => console.log(error));
  },

  getEventById(id) {
    return db.query(
      `SELECT 
      events.id AS event_id,
          (SELECT first_name || ' ' || last_name FROM users where users.id=events.user_id) AS host_name,
          (SELECT id FROM users where users.id=events.user_id) AS host_id,
          (SELECT avatar FROM users where users.id=events.user_id) AS host_avatar,
          (SELECT name FROM bars where id=event_attendees.bar_id) AS bar_name, 
          (SELECT latitude FROM bars where id=event_attendees.bar_id) AS latitude,
          (SELECT id FROM bars where id=event_attendees.bar_id) AS bar_id,
          (SELECT longitude FROM bars where id=event_attendees.bar_id) AS longitude,
          events.name AS event_name,
          events.date AS event_date, events.start_time AS event_start_time,
          events.end_time AS event_end_time, events.tag_line AS event_tag_line,
          count(event_attendees.event_id) AS attendees_count
      FROM event_attendees, users, events
      WHERE users.id = event_attendees.user_id
         AND events.id = $1
      GROUP BY event_attendees.event_id, event_attendees.bar_id, events.name, events.date, events.start_time, events.end_time, events.tag_line, events.id
      `, [id])
      .then(({ rows }) => rows[0])
      .catch(error => console.log(error));
  },

  // getEventById(id) {
  //   return db.query(
  //     `SELECT * from events where id=$1;
  //     `, [id])
  //     .then(({ rows }) => rows[0])
  //     .catch(error => console.log(error));
  // },

  getMapData() {
    return db.query(
      `SELECT id, longitude, latitude FROM bars`
    )
      .then(({ rows: map }) => map)
      .catch(error => console.log(error));
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
      LIMIT 5;
      `
    )
      .then(({ rows: events }) => events)
      .catch(error => console.log(error));
  },

  deleteUserTagLine(user_id) {
    return db.query(
      `UPDATE users  SET tag_line = '' WHERE id = $1;`, [user_id]
    )
      .then(({ rows: user }) => user)
      .catch(error => console.log(error));
  },

  deleteUserEvent(event_id) {
    return db.query(
      `DELETE FROM events WHERE events.id = $1;`, [event_id]
    )
      .then(({ rows: event }) => event)
      .catch(error => console.log(error));
  },

  addTagLine(tag_line, id) {
    return db.query(`UPDATE "users" 
    SET tag_line = $1 
    WHERE id = $2 RETURNING *;`, [tag_line, id]
    )
      .then(({ rows: event }) => event)
      .catch(error => console.log(error));
  },

  updateEmail(email, id) {
    return db.query(`UPDATE "users" 
    SET email = $1 
    WHERE id = $2 RETURNING *;`, [email, id]
    )
      .then(({ rows: event }) => event)
      .catch(error => console.log(error));
  },

  updateUserInfo(id, email, tagLine) {
    return db.query(`UPDATE "users" 
    SET email = $2, tag_line = $3
    WHERE users.id = $1 RETURNING *;`, [id, email, tagLine]
    )
      .then(({ rows: user }) => user)
      .catch(error => console.log(error));

  },

  joinEvent(user_id, event_id, bar_id) {
    return db.query(` 
    INSERT INTO "event_attendees"
    (user_id, event_id, bar_id)
    VALUES ($1, $2, $3)
    RETURNING *;`, [user_id, event_id, bar_id]
    )
      .then(({ rows: event }) => event)
      .catch(error => console.log(error));

  },

  createUserEvent(templateVars) {
    // console.log(templateVars.user_id)
    return db.query(`
    INSERT INTO "events"
    (user_id, bar_id, name, date, start_time, end_time, tag_line)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
      `, [
      templateVars.user_id,
      templateVars.bar_id,
      templateVars.event_name,
      templateVars.event_date,
      templateVars.event_start_time,
      templateVars.event_end_time,
      templateVars.event_tag_line]
    )
    
      .then(({ rows: event }) => event)
      .catch(error => console.log(error));
  },

  getUserByEmail(user_email) {
    return db.query(`
    SELECT users.email
    FROM users
    WHERE users.email = $1
    `, [user_email]
    )
      .then(({ rows: email }) => {
        if (email.length !== 0) {
          return email[0].email
        }
        else return 0
      })
      .catch(error => console.log(error));
  },

  createUser(templateVars) {
    return db.query(`
    INSERT INTO "users"
    (first_name, last_name, email, avatar)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `, [
      templateVars.first_name,
      templateVars.last_name,
      templateVars.email,
      templateVars.avatar]
    )
      .then(({ rows: user }) => user)
      .catch(error => console.log(error));
  },


  getAttendingEventsByUserId(user_id) {
    return db.query(
      `SELECT events.id AS event_id, events.user_id AS user_id, events.name AS
      event_name, events.date AS event_date, events.start_time AS event_start_time,
      events.end_time AS event_end_time, events.tag_line AS event_tag_line,
      users.first_name AS host_name, users.email AS email,
      users.avatar AS avatar,
      count(event_attendees.id) AS attendees_count
      FROM events
      JOIN users ON users.id = events.user_id
      JOIN event_attendees ON events.user_id = event_attendees.user_id
      WHERE event_attendees.user_id = $1
      GROUP BY events.id, users.first_name, users.email, users.avatar;`, [user_id]
    )
      .then(({ rows: events }) => events)
      .catch(error => console.log(error));
  },

})