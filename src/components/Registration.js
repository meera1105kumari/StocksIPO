import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './commonStyles.css';

const UserRegistration = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const navigator = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Registration successful for ${enteredUsername}`);
    navigator('/login');
  };

  return (
    <div className="custom-page-container custom-registration-container">
      <h2>User Registration</h2>
      <form className="custom-registration-form" onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={enteredUsername}
            onChange={(e) => setEnteredUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      <p>
        Have account already? <Link to="/login">Login ...</Link>.
      </p>
    </div>
  );
};

export default UserRegistration;
