// src/components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="top-row">
        <div className="logo">
          <Link to="/">
            <img src="https://logos.textgiraffe.com/logos/logo-name/Elisha-designstyle-friday-m.png" alt="Elisha Logo" />
          </Link>
        </div>
        <div className="icons">
          <FaSearch />
          <FaUser />
          <Link to="/login"> <FaShoppingBag /></Link>
        
        </div>
      </div>

      <nav className="nav">
        <ul>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/women" className={location.pathname === '/women' ? 'active' : ''}>Women</Link></li>
          <li><Link to="/stitched" className={location.pathname === '/stitched' ? 'active' : ''}>Stitched</Link></li>
          <li><Link to="/unstitched" className={location.pathname === '/unstitched' ? 'active' : ''}>Unstitched</Link></li>
          <li><Link to="/top-sales" className={location.pathname === '/top-sales' ? 'active' : ''}>Top Sales</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
