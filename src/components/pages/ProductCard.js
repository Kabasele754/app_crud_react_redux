import React from 'react';

const ProductCard = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src="/assets/1.jpg" className="card-img-top" alt="Product" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Price :{description}</p>
        <a href="#" className="btn btn-primary">Voir plus</a>
      </div>
    </div>
  );
};

export default ProductCard;
