import React from 'react';
import './Home.css';
import { useSuits } from '../context/SuitContext';
import ProductCard from '../components/ProductCard';
import Hero from '../components/Hero';
import SecondPart from '../components/SecondPart';
import NewArival from '../components/NewArival';

const Home = () => {
  const { suits, categories } = useSuits();

  return (
    <div className="home">
      <Hero />

      <section className="featured-products">
        <div className="product-grid">
          {suits.slice(0, 6).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>

      <section className="shop-by-type">
        <h2 className="shop-title">SHOP BY TYPE</h2>
        
        <div className="type-grid">
                  <button className="nav-arrow">‹</button>

          {categories.map((cat, index) => (
            <div className="type-card" key={index}>
              
              <div className="type-image">
                
                <img src={cat.image} alt={cat.label} />
              </div>
              <div className="type-label">{cat.label}</div>
              <button className="shop-type-btn">SHOP NOW</button>
            </div>
          ))}
        <button className="nav-arrow">›</button>

        </div>
      </section>

      <NewArival />
      <SecondPart />
    </div>
  );
};

export default Home;
