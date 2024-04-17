import { useEffect, useState } from "react";
import ProductService from "../../services/ProductServices";

export const EditProduct = ({ isOpen, onClose, productId, fetchData }) => {
        const [productName, setProductName] = useState('');
        const [productPrice, setProductPrice] = useState('');
        const [error, setError] = useState(null);
      
        // Utilisez useEffect pour charger les détails du produit lorsque l'ID du produit change
        useEffect(() => {
          const fetchProductDetails = async () => {
            try {
              // Chargez les détails du produit à partir de ProductService en utilisant l'ID du produit
              const productDetails = await ProductService.getProductById(productId);
              // Mettez à jour les valeurs du formulaire avec les détails du produit
              setProductName(productDetails.name);
              setProductPrice(productDetails.price);
            } catch (error) {
              console.error('Erreur lors du chargement des détails du produit :', error);
              setError(error.message);
            }
          };
      
          if (isOpen && productId) {
            fetchProductDetails();
          }
        }, [isOpen, productId]);
      
        const handleProductNameChange = (event) => {
          setProductName(event.target.value);
        };
      
        const handleProductPriceChange = (event) => {
          setProductPrice(event.target.value);
        };
      
        const handleSubmit = async (event) => {
          event.preventDefault();
          try {
            // Appel à ProductService pour mettre à jour le produit avec les nouvelles valeurs
            await ProductService.updateProduct(productId, { name: productName, price: productPrice });
            console.log('Produit mis à jour avec succès.');
            // Fermer le modal d'édition
            onClose();
            fetchData();
          } catch (error) {
            console.error('Erreur lors de la mise à jour du produit :', error);
            setError(error.message);
          }
        };
      
        return (
          <div>
            {isOpen && (
              <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5">Modifier le produit</h1>
                      <button type="button" className="btn-close" onClick={onClose} aria-label="Fermer"></button>
                    </div>
                    <div className="modal-body">
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label htmlFor="productName" className="form-label">Nom du produit</label>
                          <input type="text" className="form-control" id="productName" value={productName} onChange={handleProductNameChange} />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="productPrice" className="form-label">Prix du produit</label>
                          <input type="text" className="form-control" id="productPrice" value={productPrice} onChange={handleProductPriceChange} />
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <button type="submit" className="btn btn-primary">Enregistrer</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      };