
import React from 'react';
import Sidebar from '../components/Sidebar'; 
import { Outlet } from 'react-router-dom'; 

const Dashboard = () => {
  return (
    <div className="dashboard-container">

      <Sidebar />

    
      <div className="dashboard-main-content">
        <h1>Welcome to Your Dashboard</h1>
        <Outlet /> 
      </div>
    </div>
  );
};

export default Dashboard;
