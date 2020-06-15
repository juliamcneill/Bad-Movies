var express = require("express");
var bodyParser = require("body-parser");
var apiHelpers = require("./helpers/apiHelpers.js");
var models = require("./models/movieModel.js");

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/dist"));

app.get("/genres", function (req, res) {
  apiHelpers
    .getGenres()
    .then((genres) => {
      res.status(200).send(genres.data);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

app.get("/search", function (req, res) {
  apiHelpers
    .getMoviesInGenre(req.query.genreId)
    .then((movies) => {
      res.status(200).send(movies.data);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

app.post("/save", function (req, res) {
  console.log(req.body.movie);
  models.saveFavorite(req.body.movie, (error) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

app.delete("/delete", function (req, res) {
  console.log("on server", req.query.id);
  models.deleteFavorite(req.query.id, (error) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

app.get("/favorites", (req, res) => {
  models.getFavorites((error, results) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(3000, function () {
  console.log("listening on port 3000!");
});
