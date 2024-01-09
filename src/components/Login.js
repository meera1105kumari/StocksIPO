import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './commonStyles.css'; 

const UserLogin = ({ onUserLogin }) => {
  const [userCredentials, setUserCredentials] = useState({
    enteredUsername: '',
    enteredPassword: '',
  });
  const navigation = useNavigate();

  const handleInputChange = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    const { enteredUsername, enteredPassword } = userCredentials;
  
    if (areCredentialsValid(enteredUsername, enteredPassword)) {
      const userData = { username: enteredUsername };
      onUserLogin(userData);
      navigateToDashboard();
    } else {
      displayInvalidCredentialsAlert();
    }
  };
  
  const areCredentialsValid = (username, password) => {
    return username === 'meera' && password === 'password';
  };
  
  const navigateToDashboard = () => {
    navigation('/dashboard');
  };
  
  const displayInvalidCredentialsAlert = () => {
    alert('Invalid credentials');
  };
  


  return (
    <div className="custom-page-container custom-login-container">
      <h2>User Login</h2>
      <form className="custom-login-form" onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="enteredUsername"
            value={userCredentials.enteredUsername}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="enteredPassword"
            value={userCredentials.enteredPassword}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/registration">Register here</Link>.
      </p>
    </div>
  );
};

export default UserLogin;
