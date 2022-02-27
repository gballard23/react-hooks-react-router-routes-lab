import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map((movie) => (
    <div key={movie.title}>
      <div>
      <h2>Name:{movie.title}</h2>
      </div>
      <div>
        <h4>Time:{movie.time}</h4>
      </div>
      <div>
        <h4>Genres:</h4>
      </div>
      <ul>        
        {movie.genres.map((gen) => (
                <li key={gen}>{gen}</li>
        ))}     
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>)
}

export default Movies;
