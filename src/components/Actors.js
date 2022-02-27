import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsList = actors.map((act) => (
    <div key={act.name}>
      <div>
        <h2>Name:{act.name}</h2>
      </div>
      <div>
        <h4>Movies:</h4>
      </div>
      <ul>
        {act.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))

  return (
  <div>
    <h1>Actors Page</h1>
    {actorsList}
  </div>)
}

export default Actors;
