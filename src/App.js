import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import IpoCalendar from './components/IpoCalendar';
import CurrencyExchangeRates from './components/CurrencyExchangeRates';
import axios from 'axios';
import './App.css';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import IpoCalendar from './components/IpoCalendar';
import CurrencyExchangeRates from './components/CurrencyExchangeRates';
import axios from 'axios';
import './App.css';

function App() {
  const [customUser, setCustomUser] = useState(null);
  const [customIpoData, setCustomIpoData] = useState([]);
  const [customExchangeRates, setCustomExchangeRates] = useState([]);

  useEffect(() => {
    const fetchCustomIpoData = async () => {
      try {
        const response = await axios.get(
          'https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=pk_5562085d394e46508083d0b87f51c3d8'
        );

        setCustomIpoData(response.data);
      } catch (error) {
        console.error('Error fetching IPO data:', error);
      }
    };

    fetchCustomIpoData();
  }, []);

  useEffect(() => {
    const fetchCustomExchangeRates = async () => {
      try {
        const response = await axios.get(
          'https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=pk_5562085d394e46508083d0b87f51c3d8'
        );

        setCustomExchangeRates(response.data);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchCustomExchangeRates();
  }, []);

  const handleCustomLogin = (userData) => {
    setCustomUser(userData);
  };

  const handleCustomLogout = () => {
    setCustomUser(null);
  };

  return (
    <Router>
      <nav className="custom-navbar">
        <div className="navbar-container">
          <ul>
            <li>
              <Link to="/">CustomHome</Link>
            </li>
            <li>
              <Link to="/login">CustomLogin</Link>
            </li>
            <li>
              <Link to="/registration">CustomRegister</Link>
            </li>
            {customUser && (
              <li>
                <Link to="/dashboard">CustomDashboard</Link>
              </li>
            )}
            {customUser && (
              <li>
                <Link to="/logout">CustomLogout</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            customUser ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login onLogin={handleCustomLogin} />
            )
          }
        />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/dashboard"
          element={
            customUser ? (
              <Dashboard customUser={customUser} onLogout={handleCustomLogout}  />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
         path="/dashboard/ipo-calendar"
         element={<IpoCalendar customIpoData={customIpoData} />}
        />
        <Route
          path="/dashboard/exchange-rates"
          element={<CurrencyExchangeRates customExchangeRates={customExchangeRates} />}
        />
        <Route
          path="/logout"
          element={<Logout onLogout={handleCustomLogout} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
