// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import TopSales from './pages/TopSales';
import ProductDetail from './components/ProductDetail';
import Stitched from './pages/Stitched'
import Unstitched from './pages/Unstitched'
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Women from './pages/Women';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/top-sales" element={<TopSales />} />
                        <Route path="/women" element={<Women/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/stitched" element={<Stitched />} />
            <Route path="/unstitched" element={<Unstitched />} />
 <Route path="/login" element={<Login />} />
            <Route path="/product/:title" element={<ProductDetail/>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
