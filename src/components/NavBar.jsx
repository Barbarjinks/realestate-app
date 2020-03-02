import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/NavBar.css';

const NavBar = () => (
  <div className="NavBar">
    <img src="https://cdn1.iconfinder.com/data/icons/navigation-7/32/house-01-512.png" width="90" height="90" />
    <span>Surreal Estate</span>
    <ul className="nav">
      <Link className="item" to="/">View Properties</Link>
      <Link className="item" to="/add-property">Add a Property</Link>
    </ul>
  </div>
);

export default NavBar;
