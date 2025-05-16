import React, { useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useSuits } from '../context/SuitContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { title } = useParams();
  const { state } = useLocation();
  const { suits } = useSuits();

  const product = state?.product || suits.find((suit) => suit.title === title);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleQuantityChange = (type) => {
    if (type === 'inc') setQuantity(quantity + 1);
    else if (type === 'dec' && quantity > 1) setQuantity(quantity - 1);
  };

  if (!product) return <p>Product not found.</p>;

  const relatedProducts = suits
    .filter((item) => item.category === product.category && item.title !== product.title)
    .slice(0, 4);

  return (
    <div className="product-detail">
      <div className="product-main">
        <div className="product-images">
          <div className="image-container">
            <div className="thumbnails-vertical">
              {product.images?.map((img, i) => (
                <img key={i} src={img} alt={`thumb-${i}`} />
              ))}
            </div>
            <img src={product.image} alt="Main Product" className="main-image" />
          </div>
        </div>

        <div className="product-info">
          <h3>{product.title}</h3>
          <p>{product.description || 'Printed Embroidered Cambric | Top Bottoms'}</p>
          <h2>{product.price}</h2>
          <p className="availability">Availability: In stock</p>
          <p className="sku">SKU: ICA230601</p>

          <div className="filters">
            <h4>Filter color:</h4>
            <div className="colors-grid">
              {[
                'White', 'Red', 'Cyan', 'Navy', 'Vermillion', 'Orange',
                'Black', 'Yellow', 'Green', 'Magenta', 'Red', 'Brown',
                'Grey', 'Blue', 'Beigh', 'Purple', 'Pink', 'Darks'
              ].map((color, index) => (
                <div
                  className="color-block"
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className={`color-square ${color.toLowerCase()}`}></div>
                  <span>{color}</span>
                </div>
              ))}
            </div>

            {selectedColor && (
              <div className="size-selection">
                <p>Size</p>
                <div className="sizes">
                  {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                    <div className="size" key={size}>{size}</div>
                  ))}
                </div>
              </div>
            )}

            <div className="price-range">
              <p>Price</p>
              <input type="range" min="2000" max="10000" />
              <div className="range-labels">
                <span>2000 pkr</span>
                <span>10,000 pkr</span>
              </div>
            </div>
          </div>

          <div className="quantity">
            <button onClick={() => handleQuantityChange('dec')}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange('inc')}>+</button>
            <button className="add-to-bag">ADD TO BAG</button>
          </div>

          <div className="details">
            <p>This 2-piece Digital Printed Embroidered Cambric set includes:</p>
            <ul>
              <li>Shirt (3.0 Mtr)</li>
              <li>Trouser (2.5 Mtr)</li>
              <li>Cambric Digital Print & Embroidery</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="related-products">
        <h3>RELATED PRODUCTS</h3>
        <div className="related-grid">
          {relatedProducts.map((item, index) => (
            <Link
              to={`/product/${item.title}`}
              state={{ product: item }}
              className="related-item"
              key={index}
            >
              <img src={item.image} alt={item.title} className="related-img" />
              <p>{item.price}</p>
              <p>{item.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
