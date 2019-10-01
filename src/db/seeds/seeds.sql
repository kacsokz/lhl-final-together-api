INSERT INTO users (first_name, last_name, email, avatar, tag_line)
VALUES ('Kat', 'Connolly', 'k.connolly@nomail.com', '../../public/kc.jpeg', 'Fun & Outgoing Software Engineer'),
('Tony', 'Grimes', 't.grimes@nomail.com', '', 'Mentor & Community Leader'),
('Nima', 'Boscarino', 'n.boscarino@nomail.com', '', 'Stay yeezy'),
('Hafiz', 'Suara', 'h.suara@nomail.com', '', 'Developer, Mentor and Friend'),
('Khurram', 'Virani', 'k.virani@nomail.com', '', 'Professional Developer, Entrepreneur and Top Notch Voice Actor'),
('Casey', 'Sokach', 'c.sokach@nomail.com', '', 'Jr. Full Stack Developer'),
('Devon', 'Blake', 'd.blake@nomail.com', '', 'Full Stack Developer'),
('Ahmed', 'Murad', 'a.murad@nomail.com', '', 'Full Stack Developer'),
('Lucas', 'Wilson', 'l.wilson@nomail.com', '', 'Full Stack Developer'),
('Amanda', 'Shalansky', 'a.shalansky@nomail.com', '', 'Full Stack Developer'),
('Russel', 'McWhae', 'r.mcwhae@nomail.com', '', 'Full Stack Developer'),
('Michael', 'Chui', 'm.chui@nomail.com', '', 'Full Stack Developer'),
('Andrew', 'Kim', 'a.kim@nomail.com', '', 'Full Stack Developer'),
('Scott', 'Roberts', 's.roberts@nomail.com', '', 'Full Stack Developer');

INSERT INTO bars (name, latitude, longitude, address, start_time, end_time)
VALUES ('The Last Best Brewing Company', -114.074559, 51.042613, '607 11 Ave SW, Calgary, AB T2R 0E1', '15:30', '16:30'),
('Greta Bar', -114.066669, 51.043242, '213 10 Ave SW, Calgary, AB T2R 0A4', '15:00', '17:00'),
('Hudsons Canadas Pub', -114.074565, 51.041519, '1201 5 St SW, Calgary, AB T2R 0Y6', '16:00', '17:00'),
('El Furniture Warehouse', -114.063567, 51.045587, '107 8 Ave SW, Calgary, AB T2P 1B4', '15:30', '17:30'),
('Craft Beer Market', -114.070548, 51.043386, '345 10 Ave SW, Calgary, AB T2R 0A5', '14:00', '16:00');

INSERT INTO events (user_id, bar_id, name, date, start_time, end_time, tag_line)
VALUES (1, 1, 'Graduation & Celebration Drinks', 'Oct. 10, 2019', '20:00', '23:00', 'Join me in celebrating the accomplishments of my favourite LHL cohort, Calgary 22JUL2019.'),
(2, 2, 'Costume Showdown', 'Oct. 31, 2019', '16:00', '17:00', 'Best costume gets a shot and 5 nima bucks.'),
(3, 3, 'Pixels & Pints 10th Anniversary', 'Nov. 7, 2019', '17:00', '21:00', 'For 10 years, Calgarys best and brightest in tech and digital design have been meeting for drinks. Sometimes theres cake.'),
(4, 4, 'Holiday Party', 'Dec. 7, 2019', '15:00', '16:00', 'Mainly coffee, maybe a little irish cream...?'),
(5, 5, 'KVs NY & PBs', 'Jan. 1, 2019', '16:00', '17:00', 'Classy Conversations and Polar Bear Shots.');

INSERT INTO event_attendees (user_id, bar_id, event_id)
VALUES (1, 1, 1), (2, 1, 1), (3, 1, 1), (4, 1, 1), (5, 1, 1), (6, 1, 1), (7, 1, 1), (8, 1, 1), (9, 1, 1), (10, 1, 1), (11, 1, 1), (12, 1, 1), (13, 1, 1), (14, 1, 1),
(1, 2, 2), (2, 2, 2), (3, 2, 2), (4, 2, 2), (5, 2, 2), (6, 2, 2), (7, 2, 2), (8, 2, 2), (9, 2, 2), (10, 2, 2), (11, 2, 2), (12, 2, 2), (13, 2, 2), (14, 2, 2),
(1, 3, 3), (2, 3, 3), (3, 3, 3), (4, 3, 3), (5, 3, 3), (6, 3, 3), (7, 3, 3), (8, 3, 3), (9, 3, 3), (10, 3, 3), (11, 3, 3), (12, 3, 3), (13, 3, 3), (14, 3, 3),
(1, 4, 4), (2, 4, 4), (3, 4, 4), (4, 4, 4), (5, 4, 4), (6, 4, 4), (7, 4, 4), (8, 4, 4), (9, 4, 4), (10, 4, 4), (11, 4, 4), (12, 4, 4), (13, 4, 4), (14, 4, 4),
(1, 5, 5), (2, 5, 5), (3, 5, 5), (4, 5, 5), (5, 5, 5), (6, 5, 5), (7, 5, 5), (8, 5, 5), (9, 5, 5), (10, 5, 5), (11, 5, 5), (12, 5, 5), (13, 5, 5), (14, 5, 5);
