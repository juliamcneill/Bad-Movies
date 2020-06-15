import React from "react";
import Movie from "./Movie.jsx";

class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.handleMovieClick = this.handleMovieClick.bind(this);
  }

  handleMovieClick(event) {
    console.log("clicked");
    if (this.props.showFaves) {
      this.props.deleteMovie(event.currentTarget.id);
    } else {
      this.props.saveMovie(event.currentTarget.id);
    }
  }

  render() {
    return (
      <ul className="movies">
        {this.props.movies.map((movie) => (
          <Movie
            movie={movie}
            key={movie.id}
            handleMovieClick={this.handleMovieClick}
          />
        ))}
      </ul>
    );
  }
}

export default Movies;
