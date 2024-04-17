import React, { useState } from "react";
import ProductService from "../../services/ProductServices";

export const AddProduct = ({ isOpen, onClose, fetchData }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [error, setError] = useState(null);
//   const navigate=useNavigate();


  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductPriceChange = (event) => {
    setProductPrice(event.target.value);
  };

  const handleSubmit = async (event) => {
        event.preventDefault();
    try {
      // Appel à ProductService pour ajouter un nouveau produit
      const newProduct = await ProductService.addProduct({
        name: productName,
        price: productPrice,
      });
      console.log("Produit ajouté :", newProduct);
      // Fermer le modal
      // Rafraîchir la liste des produits après la mise à jour du produit
      fetchData();
      
    
      onClose();
//       navigate('/product');
    } catch (error) {
      console.error("Erreur lors de l'ajout du produit :", error);
      setError(error.message);
    }
  };

  return (
    <div>
      {isOpen && (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add Product
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onClose}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body" style={{ textAlign: 'left' }}>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="productName" className="form-label">
                      Product Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productName"
                      value={productName}
                      onChange={handleProductNameChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">
                      Product Price
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productPrice"
                      value={productPrice}
                      onChange={handleProductPriceChange}
                    />
                  </div>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <button type="submit" className="btn btn-primary col-12">
                    Add product
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
