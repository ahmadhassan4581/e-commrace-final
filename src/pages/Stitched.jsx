import React from "react";
import "./stitched.css";
import { useSuits } from "../context/SuitContext";
import ProductCard from "../components/ProductCard"; // Import ProductCard

const Stitched = () => {
  const { suits } = useSuits();

  return (
    <div className="stitched-container">
      <h1>Stitched Suit</h1>
      <p className="subtitle">
        Elisha offers a vast selection of women’s clothing to shop. Each season
        finds a careful assortment of clothing no matter the season, trend-driven
        and classic pieces are available. Elisha is committed to helping shoppers
        be their most stylish selves.
      </p>

      <div className="filters">
        <button>Filter</button>
        <button>Ready2Ship</button>
        <button>Size</button>
        <button>Price</button>
        <button>Discount</button>
        <button>Sort By</button>
      </div>

      <div className="product-header">
        <h2>ALL PRODUCTS of 1 pcs suit’s</h2>
      </div>

      <div className="products-flex">
        {suits.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Stitched;
