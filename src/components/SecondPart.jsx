import React from 'react';
import './SecondPart.css';
import { useSuits } from '../context/SuitContext';
import { Link } from 'react-router-dom';

const SecondPart = () => {
  const { suits, pretStyles, designerBrands } = useSuits();

  return (
    <div className="second-part">
      <h2 className="section-title">Featured Designer Brands</h2>
      <div className="brand-grid">
        {designerBrands.map((brand, idx) => (
          <div className="brand-logo" key={idx}> <img src={brand.image}  /></div>
        ))}
        <div className="explore-more">Explore More →</div>
      </div>

      <h3 className="divider">Deals By Category</h3>
      <div className="deal-grid">
        {suits.map((suit, idx) => (
          <Link
            to={`/product/${suit.title}`}
            state={{ product: suit }}
            className="deal-card"
            key={idx}
          >
            <img src={suit.image} alt={suit.title} />
            <h4>{suit.title}</h4>
          </Link>
        ))}
      </div>

      <div className="promo-banner">
        <img
          src="https://assets.vogue.com/photos/61e9c43c8aa98afba69ec2e8/master/w_2560%2Cc_limit/00_story.jpg"
          alt="monochrome"
        />
      </div>

      <h3 className="divider">PRET STYLES</h3>
      <div className="pret-carousel">
        <button className="nav-arrow">‹</button>
        <div className="pret-grid">
          {pretStyles.map((style, idx) => (
            <div className="pret-card" key={idx}>
              <div className="circle-image">
                <img src={style.image} alt={style.name} />
              </div>
              <div className="style-label">{style.name}</div>
              <button className="pret-btn">SHOP NOW</button>
            </div>
          ))}
        </div>
        <button className="nav-arrow">›</button>
      </div>
    </div>
  );
};

export default SecondPart;
