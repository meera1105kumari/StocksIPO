import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = ({ currentUser }) => {
  return (
    <div className="dashboard-container">
      <h2 align='center' className="dashboard-header">Hello there, {currentUser.username}!</h2>
      <br/> 
      <br/>
      <nav className="dashboard-navigation">
        <Link to="./ipo-calendar">Explore IPO Calendar</Link>
        <Link to="./exchange-rates">Check Currency Exchange Rates</Link>
      </nav>

      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
