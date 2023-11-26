import React from 'react';
import { Link } from 'react-router-dom';

export const AuthMenu = () => {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
};
