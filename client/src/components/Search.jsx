import React from "react";
import axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
    };
  }

  componentDidMount() {
    this.getGenres();
  }

  getGenres() {
    axios
      .get(`/genres`)
      .then(({ data }) => {
        console.log(data.genres);
        this.setState({ genres: data.genres });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="search">
        <button
          onClick={() => {
            this.props.swapFavorites();
          }}
        >
          {this.props.showFaves ? "Show Results" : "Show Favorites"}
        </button>
        <br />
        <br />

        <select onChange={this.props.setGenre}>
          <option value="">Select Genre</option>
          {this.state.genres.map((genre) => (
            <option value={genre.id}>{genre.name}</option>
          ))}
        </select>
        <br />
        <br />

        <button onClick={this.props.getMovies}>Search</button>
      </div>
    );
  }
}

export default Search;
