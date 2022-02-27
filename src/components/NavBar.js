import React from "react";
import { NavLink } from "react-router-dom";



function NavBar() {
  return ( 
  <div className="navbar">
    <ul>
      <li>
        <NavLink
        to="/"
        exact
        activeStyle={{
          color: "violet",
        }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          exact
          activeStyle={{
            color: "violet",
          }}
        >
          Movies
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/directors"
          exact
          activeStyle={{
            color: "violet",
          }}
        >
          Directors
        </NavLink>
      </li>
      <li>
          <NavLink
          to="/actors"
          exact
          activeStyle={{
            color: "violet",
          }}
        >
          Actors
        </NavLink>
      </li>
    </ul>

  </div>
  )
}

export default NavBar;
