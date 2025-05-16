import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.title}`} state={{ product }} className="product-card">
      <img className="product-image" src={product.image} alt={product.title} />
      <div className="product-footer">
        <span className="product-title">{product.title}</span>
        <span className="product-price">{product.price}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
