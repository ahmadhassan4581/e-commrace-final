import React from 'react';
import './TopSales.css';
import { useSuits } from '../context/SuitContext'; // Import context
import ProductCard from '../components/ProductCard'; // ✅ Import the reusable card

const categories = [
  {
    label: 'UNIVERSITY WEAR',
    discount: '70%',
    image: 'https://i.pinimg.com/736x/e4/aa/70/e4aa70b47a6cd0ad13d38f41b7d537d0.jpg',
  },
  {
    label: 'DESI WEAR',
    discount: '50%',
    image: 'https://i.pinimg.com/736x/0a/e7/eb/0ae7eb308ebb4a71dc29c1f20424cf10.jpg',
  },
  {
    label: 'SHADDI BAYA WEAR',
    discount: '40%',
    image: 'https://i.pinimg.com/originals/fa/01/06/fa0106ce90ecaf00e82fbf7633153f39.jpg',
  },
  {
    label: 'ABAYAS',
    discount: '30%',
    image: 'https://i.pinimg.com/736x/de/6c/06/de6c06587dc4cb1afb67fbcd7811115b.jpg',
  },
];

const TopSales = () => {
  const { suits } = useSuits();
  const topSuits = suits.slice(0, 8); // Or filter based on actual sales logic

  return (
    <div className="top-sales-container">
      <h2 className="top-sales-heading">Top Sales</h2>
      <p className="top-sales-subtext">
        Elisha offers a vast selection of women’s clothing to shop. Each season
        finds a careful assortment of clothing no matter the season, trend-driven and
        classic pieces are available. Elisha is committed to helping shoppers
        be their most stylish selves
      </p>

      <div className="top-sales-filters">
        <button>Filter</button>
        <div className="toggle">Ready&Ship <input type="checkbox" /></div>
        <select><option>Size</option></select>
        <select><option>Price</option></select>
        <select><option>Discount</option></select>
        <button>Sort By</button>
      </div>

      <div className="category-carousel">
        {categories.map((cat, i) => (
          <div key={i} className="category-badge">
            <div className="circle-img">
              <img src={cat.image} alt={cat.label} />
              <div className="discount-circle">{cat.discount}</div>
            </div>
            <div className="category-label">{cat.label}</div>
          </div>
        ))}
      </div>

      <div className="product-grid">
        {topSuits.map((product) => (
          <ProductCard key={product.id || product.title} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopSales;
