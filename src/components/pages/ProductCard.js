import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src="/assets/1.jpg" className="card-img-top" alt="Product" />
      <div className="card-body" style={{ textAlign: 'left' }}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Price :{description}</p>
        <p className="card-text">descriptionkkfddkfnjjfbhbfjdbjfghbjhfbhbfhbdjhbdjhb</p>
        <Link href="#" className="btn btn-primary col-12">Voir plus</Link>
      </div>
    </div>
  );
};

export default ProductCard;
