import React from 'react';
import './NewArival.css';
import { useSuits } from '../context/SuitContext';
import { Link } from 'react-router-dom';

const NewArival = () => {
  const { suits } = useSuits();
  const newArrivals = suits.slice(0, 4); // First 4 suits

  return (
    <div className="new-arival-container">
      <h2 className="section-heading">NEW ARRIVALS</h2>
      <div className="new-arival-wrapper">
        {newArrivals.map((item, index) => (
          <Link
            to={`/product/${item.title}`}
            state={{ product: item }}
            className="arrival-card"
            key={index}
          >
            <img src={item.image} alt={item.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewArival;
