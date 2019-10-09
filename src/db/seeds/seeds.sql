INSERT INTO users (first_name, last_name, email, avatar, tag_line)
VALUES ('Kat', 'Connolly', 'k.connolly@nomail.com', 'https://media.licdn.com/dms/image/C5603AQFUiMn0YgEGvQ/profile-displayphoto-shrink_200_200/0?e=1576108800&v=beta&t=06_76dpJ60WOM3UZtd1E3BU4GFo_tbCPBJZ4dWCpRnQ', 'Fun & Outgoing Software Engineer'),
('Tony', 'Grimes', 't.grimes@nomail.com', 'https://media.licdn.com/dms/image/C5603AQHNzWe9UGqe7A/profile-displayphoto-shrink_200_200/0?e=1576108800&v=beta&t=Dtzt6UC18tTVw8LK-H7moRFlQTn2mK50kIkr-u_c4fo', 'Mentor & Community Leader'),
('Nima', 'Boscarino', 'n.boscarino@nomail.com', 'https://media.licdn.com/dms/image/C5603AQGvSXr1afvHXw/profile-displayphoto-shrink_200_200/0?e=1576108800&v=beta&t=O_iBJVGsWUYS_hwKFKIPS8DDoHm71ZOTEWLqotRdHZ4', 'Stay yeezy'),
('Hafiz', 'Suara', 'h.suara@nomail.com', 'https://media.licdn.com/dms/image/C5603AQGtBG7dCdpbGA/profile-displayphoto-shrink_200_200/0?e=1576108800&v=beta&t=eQ5_TEUntcsy0g74cpKPHdMor8JnDpKsUAKfS38Z3h8', 'Developer, Mentor and Friend'),
('Khurram', 'Virani', 'k.virani@nomail.com', 'https://media.licdn.com/dms/image/C5603AQGBG55ORV0srA/profile-displayphoto-shrink_200_200/0?e=1576108800&v=beta&t=fM2DnX_V4SXmv-bqM5aaThxoTfEC7Amr5xFzvWJOGdE', 'Professional Developer, Entrepreneur and Top Notch Voice Actor'),
('Casey', 'Sokach', 'caseysokach@gmail.com', 'https://media.licdn.com/dms/image/C5603AQF3iiVmpnP7eA/profile-displayphoto-shrink_200_200/0?e=1576108800&v=beta&t=lzsQeTb54LcY2SUT7pUZTL1XwUaHi8g-5h8b1M5d-mA', 'Jr. Full Stack Developer'),
('Devon', 'Blake', 'd.blake@nomail.com', '', 'Full Stack Developer'),
('Ahmed', 'Murad', 'a.murad@nomail.com', 'https://media.licdn.com/dms/image/C4E03AQGW-f3Zqoe6ZQ/profile-displayphoto-shrink_200_200/0?e=1576108800&v=beta&t=s9M6IdsddDrBMnHxG5daVyc1mzXTfeSJdLyyEKLzxrI', 'Full Stack Developer'),
('Lucas', 'Wilson', 'l.wilson@nomail.com', 'https://media.licdn.com/dms/image/C5603AQFuh_YYqEVumA/profile-displayphoto-shrink_200_200/0?e=1576108800&v=beta&t=KIsNHU3iwJX-kNYJq_Z2_lm3RJEgraFP36Kh3Eacj1E', 'Full Stack Developer'),
('Amanda', 'Shalansky', 'a.shalansky@nomail.com', 'https://media.licdn.com/dms/image/C5603AQHw0zdqzKjhLQ/profile-displayphoto-shrink_200_200/0?e=1576108800&v=beta&t=QgSuS_A9SW-6Qp_OqKMHcCqnIdeZQ8FJcCpxz-dmV-8', 'Full Stack Developer'),
('Russell', 'McWhae', 'r.mcwhae@nomail.com', 'https://media.licdn.com/dms/image/C5603AQE5OHt-L-svHw/profile-displayphoto-shrink_200_200/0?e=1576108800&v=beta&t=tDCPgoYZrGXTQdIlsFoyzmGMwG0c-r5ovq2K7PSSpYQ', 'Full Stack Developer'),
('Michael', 'Chui', 'm.chui@nomail.com', 'https://media.licdn.com/dms/image/C5603AQFudKQGHBiY-w/profile-displayphoto-shrink_200_200/0?e=1576108800&v=beta&t=DlvyUvt7ulKHK9GqayEQ_NyCsIyQatR2ieVYgw549ws', 'Full Stack Developer'),
('Andrew', 'Kim', 'a.kim@nomail.com', 'https://media.licdn.com/dms/image/C5603AQGlVefqKbIc7w/profile-displayphoto-shrink_200_200/0?e=1576108800&v=beta&t=2gqc3AVeuHQB7pe8MwOmKVsXXJiMS3wB_TAzXww7sl8', 'Full Stack Developer'),
('Scott', 'Roberts', 's.roberts@nomail.com', 'https://media.licdn.com/dms/image/C5603AQGlBZ5s4UKwlw/profile-displayphoto-shrink_200_200/0?e=1576108800&v=beta&t=9y4fHx7pjKwFoCv14O9sT-feZXTd4c4H2ZTAabHTzeM', 'Full Stack Developer');

INSERT INTO bars (name, latitude, longitude, address, start_time, end_time)
VALUES ('The Last Best Brewing Company', -114.074559, 51.042613, '607 11 Ave SW, Calgary, AB T2R 0E1', '15:30', '16:30'),
('Greta Bar', -114.066669, 51.043242, '213 10 Ave SW, Calgary, AB T2R 0A4', '15:00', '17:00'),
('Hudsons Canadas Pub', -114.074565, 51.041519, '1201 5 St SW, Calgary, AB T2R 0Y6', '16:00', '17:00'),
('El Furniture Warehouse', -114.063567, 51.045587, '107 8 Ave SW, Calgary, AB T2P 1B4', '15:30', '17:30'),
('Craft Beer Market', -114.070548, 51.043386, '345 10 Ave SW, Calgary, AB T2R 0A5', '14:00', '16:00');

INSERT INTO events (user_id, bar_id, name, date, start_time, end_time, tag_line)
VALUES (1, 1, 'Graduation & Celebration Drinks', 'Oct. 10, 2019', '20:00', '23:00', 'Join me in celebrating the accomplishments of my favourite LHL cohort, Calgary 22JUL2019.'),
(1, 2, 'Chic Geek', 'Oct. 12, 2019', '17:00', '22:00', 'Chic Geek tribe meetup!'),
(3, 5, 'Im back in Calgary!', 'Oct.12, 2019', '18:30', '23:00', 'Lets get drunk!!'),
(2, 2, 'Pixels & Pints 10th Anniversary', 'Nov. 7, 2019', '17:00', '21:00', 'For 10 years, Calgarys best and brightest in tech and digital design have been meeting for drinks. Sometimes theres cake.'),
(3, 3, 'Costume Showdown', 'Oct. 31, 2019', '16:00', '17:00', 'Best costume gets a shot and 5 nima bucks.'),
(4, 4, 'Holiday Party', 'Dec. 7, 2019', '15:00', '16:00', 'Mainly coffee, maybe a little irish cream...?'),
(5, 5, 'KVs NY & PBs', 'Jan. 1, 2019', '16:00', '17:00', 'Classy Conversations and Polar Bear Shots.');

INSERT INTO event_attendees (user_id, bar_id, event_id)
VALUES (1, 1, 1), (2, 1, 1), (3, 1, 1), (4, 1, 1), (5, 1, 1), (6, 1, 1), (7, 1, 1), (8, 1, 1), (9, 1, 1), (10, 1, 1), (11, 1, 1), (12, 1, 1), (13, 1, 1), (14, 1, 1),
(1, 2, 2), (6, 2, 2), (10, 2, 2),
(2, 5, 3), (3, 5, 3), (4, 5, 3), (5, 5, 3), (7, 5, 3), (8, 5, 3), (9, 5, 3), (11, 5, 3), (12, 5, 3), (13, 5, 3), (14, 5, 3),
(1, 2, 4), (2, 2, 4), (3, 2, 4), (4, 2, 4), (5, 2, 4), (6, 2, 4), (7, 2, 4), (8, 2, 4), (9, 2, 4), (10, 2, 4), (11, 2, 4), (12, 2, 4), (13, 2, 4), (14, 2, 4),
(1, 3, 5), (2, 3, 5), (3, 3, 5), (4, 3, 5), (5, 3, 5), (6, 3, 5), (7, 3, 5), (8, 3, 5), (9, 3, 5), (10, 3, 5), (11, 3, 5), (12, 3, 5), (13, 3, 5), (14, 3, 5),
(1, 4, 6), (2, 4, 6), (3, 4, 6), (4, 4, 6), (5, 4, 6), (6, 4, 6), (7, 4, 6), (8, 4, 6), (9, 4, 6), (10, 4, 6), (11, 4, 6), (12, 4, 6), (13, 4, 6), (14, 4, 6),
(1, 5, 7), (2, 5, 7), (3, 5, 7), (4, 5, 7), (5, 5, 7), (6, 5, 7), (7, 5, 7), (8, 5, 7), (9, 5, 7), (10, 5, 7), (11, 5, 7), (12, 5, 7), (13, 5, 7), (14, 5, 7);