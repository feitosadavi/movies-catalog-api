
# Movies Catalog API 

A REST API for Wa Project's Challenge



## Tech Stack

**Server:** Node, Express, Typescript

**DB:** MongoDB

**API Archictecture:** Rest

**Testing:** Jest

**CI/CD:** Github Actions

**Deploy:** Heroku



## Features

- Add new movies to database, using Studio Ghibli API
- Get Movies
- Clear database



## Installation

Install Corelab API Challenge with npm

 - Install docker
 - Install docker-compose

```bash
  git clone https://github.com/feitosadavi/movies-catalog-api
  cd movies-catalog-api
  npm install
```


## Run

To run the project with Docker you need to follow the steps above:

```bash
  docker-compose up
  or
  npm run build & npm start (you should have a MongoDB instance running)
```
    
## Running Tests

To run tests, run the following command

```bash
  npm run test
```

to watch code changes:

```bash
  npm run test:watch
```


## API Reference

### Get all movies (GET /movies)

```http
  curl -i -H 'Accept: application/json' http://localhost:3333/api/movies/:skip?/:limit?
```

| URL Parameters | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `skip` | `string` | **Optional**. Skip documents from database (use it for pagination) |
| `limit` | `string` | **Optional**. Limit documents from database (use it for pagination) |

#### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    [{
        "id": 62e0536a217374b31ef8d47f,
        "title": "Castle in The Sky",
        "banner": "https://image.tmdb.org/t/p/original/vkZSd0Lp8iCVBGpFH9L7LzLusjS.jpg",
        "description": "In the latter part of World War II [...].",
        "producer": "Isao Takahata",
        "director": "Toru Hara",
    }, {
        "id": 62e0536a217374b31ef8d480,
        "title": "Castle in The Sky",
        "banner": "https://image.tmdb.org/t/p/original/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg",
        "description": "Two sisters move to the country with their father in [...].",
        "producer": "Hayao Miyazaki",
        "director": "Hayao Miyazaki",
    }, ...]

### Add 50 new movies if database is empty (POST /movies)

```http
  curl -i -H 'Accept: application/json' -d ${data} http://localhost:3333/api/movies'
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. Movie's name |
| `description` | `string` | **Required**. Movie's description |
| `banner` | `string` | **Required**. Movie's manufacturing banner (between 1900 and current year) |
| `producer` | `float` | **Required**. Movie's producer |
| `director` | `string` | **Required**. Movie's director |

#### Response

    HTTP/1.1 204 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    {}


### Delete vehicle (DELETE /vehicles/:id/delete)

```http
    curl -i -H 'Accept: application/json' -d {isFavorite: true} http://localhost:3333/vehicles/1/delete'
```

#### Response

    HTTP/1.1 204 NO CONTENT
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2
## Final Considerations

It was amazing to work with this project. 
Thanks for the opportunity and I hope we can chat soon! :blush:

