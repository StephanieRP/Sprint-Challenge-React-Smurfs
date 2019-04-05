import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <ul>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/add">Add Smurf</NavLink>
      </ul>
    </div>
  );
}

Header.propTypes = {};

export default Header;
