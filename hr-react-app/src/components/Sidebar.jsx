import React from 'react';
import { Link } from 'react-router-dom'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>My App</h2>
      </div>

      <nav className="sidebar-nav" >
        <ul>
          <li>
            <Link to="/" className="sidebar-link">Home</Link>
          </li>
          <li>
            <Link to="/profile" className="sidebar-link">Profile</Link>
          </li>
          <li>
            <Link to="/contact" className="sidebar-link">Contact</Link>
          </li>
          <li>
            <Link to="/about" className="sidebar-link">About</Link>


          </li>

          <li>
            <Link to="/login" className="sidebar-link">Login</Link>  
          </li>
          <li>
            <Link to="/register" className="sidebar-link">Register</Link>
     
          </li>
      
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
