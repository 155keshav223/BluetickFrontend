import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">BlueTick</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/letsconnect">Let's Connect</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
