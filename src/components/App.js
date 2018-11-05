import React, { Component } from "react";
import { moviesData } from "../moviesData";
import MovieList from "./MovieList";
import MovieListWillWatch from "./MovieListWillWatch";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    };
  }

  handleChange = (title, id, vote_average) => {
    let movie = {
      title,
      id,
      vote_average
    };
    let moviesWillWatch = this.state.moviesWillWatch;
    if (
      !moviesWillWatch.some(item => {
        return item.id === movie.id;
      })
    ) {
      moviesWillWatch.push(movie);
    } else {
      moviesWillWatch = moviesWillWatch.filter(item => {
        return item.id !== movie.id;
      });
    }
    //console.log(moviesWillWatch);
    this.setState({ moviesWillWatch: moviesWillWatch });
  };

  render() {
    const { moviesWillWatch } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <MovieList
              moviesData={this.state.movies}
              handleChange={this.handleChange}
            />
          </div>
          <div className="col-sm-3">
            <MovieListWillWatch moviesWillWatch={this.state.moviesWillWatch} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
