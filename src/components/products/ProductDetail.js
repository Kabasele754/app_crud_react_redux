import { useEffect, useState } from "react";
import ProductService from "../../services/ProductServices";

export const ProductDetail = ({ isOpen, onClose,productId }) => {

const [productDetails, setProductDetails] = useState(null);

useEffect(() => {
    if (isOpen && productId) {
        const getProductDetails = async () => {
            try {
                const productDetails = await ProductService.getProductById(productId);
                setProductDetails(productDetails);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };
        getProductDetails();
    }
}, [isOpen, productId]);
        return (
            <div>
                {isOpen && (
                    <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Product Detail</h1>
                                    <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                                </div>
                                <div className="modal-body" style={{ textAlign: 'left' }}>
                                {productDetails ? (
    <div>
        <p><strong>Name:</strong> {productDetails.name}</p>
        <p><strong>Price:</strong> {productDetails.price}</p>
        {/* Ajoutez d'autres détails du produit ici */}
    </div>
) : (
    <p>Loading product details...</p>
)}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };