import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">USER LOGIN</h2>
      
      <div className="input-group">
        <label>USER NAME</label>
        <input type="text" />
      </div>
      
      <div className="input-group">
        <label>PASSWORD</label>
        <input type="password" />
      </div>
      
      <div className="remember-forgot">
        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">REMEMBER</label>
        </div>
        <a href="#" className="forgot-password">FORGET PASSWORD</a>
      </div>
      
      <button className="login-button">Login</button>
    </div>
  );
};

export default Login;