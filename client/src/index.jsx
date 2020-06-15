import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Search from "./components/Search.jsx";
import Movies from "./components/Movies.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genreId: "",
      movies: [],
      favorites: [],
      showFaves: false,
    };

    this.getMovies = this.getMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
    this.setGenre = this.setGenre.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
  }

  componentDidMount() {
    this.getMovies();
    this.getFavorites();
  }

  getMovies() {
    axios
      .get(`/search?genreId=${this.state.genreId}`)
      .then(({ data }) => {
        this.setState({ movies: data.results });
        console.log(this.state.movies);
      })
      .catch((err) => console.log(err));
  }

  saveMovie(id) {
    let movie,
      found = false;
    for (movie of this.state.movies) {
      if (movie.id === parseInt(id)) {
        found = true;
        break;
      }
    }
    if (found) {
      axios
        .post("/save", { movie: movie })
        .then(() => {
          this.getFavorites();
        })
        .catch((error) => console.log(error));
    }
  }

  deleteMovie(id) {
    console.log("in react", id);
    axios
      .delete(`/delete?id=${id}`)
      .then(() => {
        console.log("delete completed");
        this.getFavorites();
      })
      .catch((err) => console.log(err));
  }

  swapFavorites() {
    this.setState({
      showFaves: !this.state.showFaves,
    });
  }

  getFavorites() {
    axios
      .get("/favorites")
      .then(({ data }) => {
        console.log("data: ", data);
        this.setState({ favorites: data });
      })
      .catch((err) => console.log(err));
  }

  setGenre(event) {
    this.setState({ genreId: event.target.value });
  }

  render() {
    return (
      <div className="app">
        <header className="navbar">
          <h1>Bad Movies</h1>
        </header>

        <div className="main">
          <Search
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
            setGenre={this.setGenre}
            getMovies={this.getMovies}
          />
          <Movies
            movies={
              this.state.showFaves ? this.state.favorites : this.state.movies
            }
            showFaves={this.state.showFaves}
            saveMovie={this.saveMovie}
            deleteMovie={this.deleteMovie}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
