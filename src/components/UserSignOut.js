import React from 'react';
import { useNavigate } from 'react-router-dom';
import './commonStyles.css';

const UserSignOut = ({ onSignOut }) => {
  const navigator = useNavigate();

  const handleSignOut = () => {
    onSignOut();
    navigator('/login');
  };

  return (
    <div className="centered-container">
      <button className="sign-out-btn" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default UserSignOut;
