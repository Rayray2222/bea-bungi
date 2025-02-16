// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register'; // Import Register component
import Login from './components/Login'; // Import Login component
import Dashboard from './components/Dashboard'; // Import Dashboard component (optional if you have it)
import Profile from './components/Profile';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import EditProfile from './components/EditProfile';
import './App.css';
import './Sidebar.css';

const App = () => {
  return (
    <Router>
      <div>
    
        {/* Define Routes */}
        <Routes>
          <Route path="/register" element={<Register />} /> {/* Register Route */}
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element ={<Dashboard/>} />
          <Route path="/profile" element ={<Profile/>} />
          <Route path="/" element ={<Home/>} />
          <Route path="contact" element ={<Contact/>} />
          <Route path="about" element ={<About/>} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
