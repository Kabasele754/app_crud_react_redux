import * as React from 'react';
import MyCarousel from './MyCarousel';
import { useEffect, useState } from "react";
import ProductService from '../../services/ProductServices';
import ProductCard from './ProductCard';

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Nombre de produits par page

  const fetchData = async () => {
    try {
      setLoading(true);
      const productList = await ProductService.getAllProducts();
      setProducts(productList);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Calcule l'index de début et de fin des produits à afficher sur la page actuelle
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change la page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <br></br>
      <MyCarousel></MyCarousel>
      <br></br>
      <div className="row p-2">
        {currentProducts.map(product => (
          <div className="col-md-4 mb-3" key={product.id}>
            <ProductCard
              image={product.image}
              title={product.name}
              description={product.price}
            />
          </div>
        ))}
      </div>
      {/* Boutons de pagination avec le style Bootstrap */}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
            <button className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</button>
          </li>
          {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 && 'active'}`}>
              <button className="page-link" onClick={() => paginate(index + 1)}>{index + 1}</button>
            </li>
          ))}
          <li className={`page-item ${currentPage === Math.ceil(products.length / productsPerPage) && 'disabled'}`}>
            <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
