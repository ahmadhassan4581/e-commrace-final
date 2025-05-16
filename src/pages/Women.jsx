import React from 'react';
import './Women.css';
import { useSuits } from '../context/SuitContext';
import ProductCard from '../components/ProductCard'; // Import ProductCard

const Women = () => {
  const { suits } = useSuits();
  const womenProducts = suits.slice(0, 8);

  return (
    <div className="women-container">
      <h2 className="women-heading">Women's Collection</h2>
      <p className="women-subtext">
        Discover our exquisite collection of women's fashion. Each piece is carefully 
        selected to bring you the latest trends and timeless classics.
      </p>

      <div className="product-grid">
        {womenProducts.map((product, i) => (
          <ProductCard key={i} product={product} /> // Use ProductCard here
        ))}
      </div>
    </div>
  );
};

export default Women;
