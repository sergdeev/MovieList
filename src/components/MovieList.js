import React, { Component } from "react";
import { moviesData } from "../moviesData";

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isActive: false
    };
  }

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive });
    this.props.handleChange(
      this.props.title,
      this.props.id,
      this.props.vote_average
    );
  };

  render() {
    const { path, title, vote_average } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${path}`}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="card-info">
            <p className="card-text">Rating: {vote_average}</p>
            <button
              className={`btn + ${
                this.state.isActive ? "btn-success" : "btn-secondary"
              }`}
              onClick={this.handleClick}
            >
              Will Watch
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default function MovieList(props) {
  return (
    <div className="moviesList ">
      {props.moviesData.map(item => (
        <MovieItem
          path={item.backdrop_path}
          title={item.title}
          vote_average={item.vote_average}
          handleChange={props.handleChange}
          id={item.id}
        />
      ))}
    </div>
  );
}
