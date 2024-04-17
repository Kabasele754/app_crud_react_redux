import { useState } from "react";

export const EditProduct = ({ isOpen, onClose }) => {
        const [productName, setProductName] = useState('');
        const [productPrice, setProductPrice] = useState('');
    
        const handleProductNameChange = (event) => {
            setProductName(event.target.value);
        };
    
        const handleProductPriceChange = (event) => {
            setProductPrice(event.target.value);
        };
    
        const handleSubmit = (event) => {
            // Logique pour soumettre le produit
            // Vous pouvez implémenter la logique de sauvegarde des données ici
            console.log("Produit soumis : ", { productName, productPrice });
            // Fermer le modal
            onClose();
            // Empêcher le rechargement de la page
            event.preventDefault();
        };
    
        return (
            <div>
                {isOpen && (
                    <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Product</h1>
                                    <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="productName" className="form-label">Product Name</label>
                                            <input type="text" className="form-control" id="productName" value={productName} onChange={handleProductNameChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="productPrice" className="form-label">Product Price</label>
                                            <input type="text" className="form-control" id="productPrice" value={productPrice} onChange={handleProductPriceChange} />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Save</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );    };