const axios = require("axios");
const { API_KEY } = require("../../config.js");

module.exports.getGenres = () => {
  return axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
};

module.exports.getMoviesInGenre = (genre) => {
  return axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=3e17630ab6c33b3a9200b127701e576b&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&with_genres=${genre}`
  );
};
