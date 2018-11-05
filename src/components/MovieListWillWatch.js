import React from "react";

export default function MovieListWillWatch(props) {
  const { moviesWillWatch } = props;
  return (
    <ul className="list-group">
      <h4 className="card-title">
        Will Watch: {moviesWillWatch.length} movies
      </h4>
      {moviesWillWatch.map(item => (
        <li className="list-group-item" key={item.id}>
          <div>{item.title}</div>
          <div>{item.vote_average}</div>
        </li>
      ))}
    </ul>
  );
}
