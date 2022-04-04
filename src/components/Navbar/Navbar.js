import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/dashbord">Dashbord</Link>
        <Link to='/blogs'>Blogs</Link>
        <Link to='/about'>About</Link>
      </nav>     
    </div>
  );
};

export default Navbar;