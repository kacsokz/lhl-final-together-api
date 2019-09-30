## LHL-Final-Together-API

## Api

### Users

`GET /api/users`

Response

```json
[
  {
    "id": 1,
    "first_name": "Randy",
    "last_name": "Calhoon",
    "email": "randy.calhoon@gmail.com",
    "avatar": "https://i.imgur.com/LpaY82x.png",
    "tag_line": "Always ready to rock and/or roll!"
  }
]
```

`PUT /api/users/:id`

Body:

```json
[
  {
    "tag_line": String
  }
]
```

`DELETE /api/users/:id`

### Bars

`GET /api/bars`

Response

```json
[
  {
    "id": 1,
    "name": "The Last Best Brewing Company",
    "latitude": 51.042783,
    "longitude": -114.074595,
    "address": "607 11 Ave SW, Calgary, AB T2R 0E1",
    "start_time": "15:30",
    "end_time": "16:30"
  }
]
```

### Events

`GET /api/events`

Response

```json
[
  {
    "id": 1,
    "user_id": 1,
    "bar_id": 1,
    "name": "Graduation & Celebration Drinks",
    "date": "Oct. 11, 2019",
    "start_time": "15:00",
    "end_time": "17:00",
    "tag_line": "After 12 long weeks, we are officially Dev's!"
  }
]
```

`PUT /api/events/:id`

Body:

```json
[
  {
    "bar_id": Number,
    "name": String,
    "date": String,
    "start_time": String,
    "end_time": String,
    "tag_line": String
  }
]
```

`DELETE /api/events/:id`