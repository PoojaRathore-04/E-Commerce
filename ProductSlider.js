import React from 'react';
import './ProductSlider.css';

const ProductSlider = ({ products }) => {
  return (
    <div className="slider">
      <div className="slider-track">
        {[...products, ...products].map((product, index) => (
          <div key={index} className="slide">
            <div className="slide-card">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
