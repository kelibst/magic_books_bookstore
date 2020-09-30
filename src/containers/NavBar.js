import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
    <div className="container">
      <h2 className="font-weight-bolder text-primary">Bookstore CMS</h2>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home
              <span className="sr-only">(current)</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/categories">Categories</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
