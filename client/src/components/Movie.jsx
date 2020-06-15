import React from "react";

class Movie extends React.Component {
  constructor(props) {
    super(props);
  }

  // Make an onClick for each list item. If the movies shown is the search results,
  // onClick add it to the database (do it in the main app, and pass down the function)

  // If you're currently showing the fave list, delete the movie instead
  // You can tell which list is currently being rendered based on whether the prop "showFaves" is false (search results) or true (fave list) (within index.jsx)

  render() {
    return (
      <li
        className="movie_item"
        id={this.props.movie.id}
        onClick={this.props.handleMovieClick}
      >
        {this.props.movie.poster_path !== null && (
          <img
            src={`https://image.tmdb.org/t/p/w300${this.props.movie.poster_path}`}
          />
        )}
        {this.props.movie.poster_path === null && (
          <img
            src={`https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300`}
          />
        )}
        <div className="movie_description">
          <h2>{this.props.movie.title}</h2>
          <section className="movie_details">
            <div className="movie_year">
              <span className="title">Year</span>
              <span>{this.props.movie.release_date.substring(0, 4)}</span>
            </div>
            <div className="movie_rating">
              <span className="title">Rating</span>
              <span>{this.props.movie.vote_average}</span>
            </div>
          </section>
        </div>
      </li>
    );
  }
}

export default Movie;
