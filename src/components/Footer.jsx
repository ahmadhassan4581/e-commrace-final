// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
    
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Store Locator</li>
            <li>Store Addresses</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Services</h3>
          <ul>
            <li>Contact Us</li>
            <li>Delivery & Orders</li>
            <li>Returns & Exchanges</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Whatsapp: 0322 6773534</li>
            <li>Email: elisha@gmail.com</li>
            <li>Location: Landmark Plaza, Jail Road, Lahore</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Elisha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
