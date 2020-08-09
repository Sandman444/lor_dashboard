import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/collector">Card Collector</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
