const sqlDb = require("../../db");

module.exports.saveFavorite = (
  { id, title, overview, release_date, popularity, vote_average, poster_path },
  callback
) => {
  console.log("made it");
  const query = `INSERT INTO favoritemovies SET ?`;
  const properties = {
    id,
    title,
    overview,
    release_date,
    popularity,
    vote_average,
    poster_path,
  };
  sqlDb.query(query, properties, callback);
};

module.exports.deleteFavorite = (id, callback) => {
  console.log("id is", id);
  const query = `DELETE FROM favoritemovies WHERE \`id\` = ?`;
  sqlDb.query(query, [id], callback);
};

module.exports.getFavorites = (callback) => {
  const query = "SELECT * FROM favoritemovies";
  sqlDb.query(query, callback);
};
