import React from "react";
import "./stitched.css";
import ProductCard from "../components/ProductCard"; // ✅ Import ProductCard

// ✅ Add unique IDs for proper routing
const suits = [
  {
    id: 1,
    title: "Classic Kameez",
    type: "Printed | Cambric",
    price: "2490",
    image: "https://hooraindesignerwear.com/cdn/shop/articles/maria-b-chiffon-collection-766508.webp?v=1721215438",
  },
  {
    id: 2,
    title: "Drop Shoulder",
    type: "Yarn Dyed Embroidered",
    price: "4490",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Ir5T7aP8WwT6D4JEFtIVNwZFZtmRi2PDeA&s",
  },
  {
    id: 3,
    title: "Classic Kurta",
    type: "Printed | Cambric",
    price: "2190",
    image: "https://i.pinimg.com/736x/27/5c/1a/275c1ae9a2581e11fc1cb08b12b352b4.jpg",
  },
  {
    id: 4,
    title: "Classic Kameez",
    type: "Printed | Cambric",
    price: "2490",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5eLgzJi0vTCio8BMNYteOCTX1-KH3ZfjaJ1AnwuUsCqIn9r4q-308NcHPB5mgRBvWj4&usqp=CAU",
  },
  {
    id: 5,
    title: "Drop Shoulder",
    type: "Yarn Dyed Embroidered",
    price: "4490",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWrn6vuiPSMG8jOw9NHxhIQ7EIiVFa2I9hA_ZJ4KJytcjITZmJ7x7a6-FpocyE9DbTD4&usqp=CAU",
  },
  {
    id: 6,
    title: "Classic Kurta",
    type: "Printed | Cambric",
    price: "2190",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWT8FBdwoIKU_clJoBuOsT-MVeOxlzWgWJgCChF33t_Hu5oMA1QYahaDgcVk5tjuCzrY&usqp=CAU",
  },
  {
    id: 7,
    title: "Classic Kameez",
    type: "Printed | Cambric",
    price: "2490",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWrn6vuiPSMG8jOw9NHxhIQ7EIiVFa2I9hA_ZJ4KJytcjITZmJ7x7a6-FpocyE9DbTD4&usqp=CAU",
  },
  {
    id: 8,
    title: "Drop Shoulder",
    type: "Yarn Dyed Embroidered",
    price: "4490",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZgJnn9bCk0qIFyTMBiJrsYLcBaSJu7_pdwH74aTLzmXwnRixTQQIksMBj-uYnaCYPJ0&usqp=CAU",
  },
  {
    id: 9,
    title: "Classic Kurta",
    type: "Printed | Cambric",
    price: "2190",
    image: "https://i.pinimg.com/474x/17/38/4b/17384b8dfa30fda84859d506d47cde5e.jpg",
  },
];

const Stitched = () => {
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
        {suits.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Stitched;
