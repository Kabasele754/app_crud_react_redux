import { AddProduct } from "./AddProduct";
import { useEffect, useState } from "react";
import { ProductDetail } from "./ProductDetail";
import { EditProduct } from "./EditProduct";
import { DeleteProduct } from "./DeleteProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faEye, faAdd } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";
import { fetchProducts } from "../../redux/actions/product/fetchProductAction";
import ProductService from "../../services/ProductServices";


export const ProductList = () => {
        // const { products, loading, error, fetchProducts } = props; 
        const [products, setProducts] = useState([]);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);
        const [isAddModalOpen, setIsAddModalOpen] = useState(false);
        const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
        const [isEditModalOpen, setIsEditModalOpen] = useState(false);
        const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
        // State pour stocker l'ID du produit sélectionné pour l'édition, delete et detail
        const [selectedProductId, setSelectedProductId] = useState(null);



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

              const refreshProductList = async () => {
                try {
                  const productList = await ProductService.getAllProducts();
                  setProducts(productList);
                } catch (error) {
                  console.error("Error fetching products:", error);
                }
              };
            
              useEffect(() => {
                refreshProductList();
              }, []);

              

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
        const openAddModal = () => {
            setIsAddModalOpen(true);
        };
    
        const closeAddModal = () => {
            setIsAddModalOpen(false);
        };
    
const openDetailModal = (productId) => {
        setSelectedProductId(productId);
        setIsDetailModalOpen(true);
        };
            
    
const closeDetailModal = () => {
        setSelectedProductId(null);
        setIsDetailModalOpen(false);
};


        const openEditModal = (productId) => { // Modifiez la fonction pour accepter l'ID du produit en argument
                setSelectedProductId(productId); // Mettez à jour l'état avec l'ID du produit sélectionné
                setIsEditModalOpen(true);
              };
            
        const handleCloseEditModal = () => {
        setSelectedProductId(null); // Réinitialisez l'ID du produit sélectionné lorsque le modal se ferme
        setIsEditModalOpen(false);
        };
        
        const openDeleteModal = (productId) => {
                setSelectedProductId(productId);
        setIsDeleteModalOpen(true);
        };
        
        const closeDeleteModal = () => {
                setSelectedProductId(null);
        setIsDeleteModalOpen(false);
        
        };
    
        return (
                <div>
                <br />
                <div className="card">
                    <div className="card-header float-right">
                        <button type="button" className="btn btn-primary" onClick={openAddModal}>
                            <FontAwesomeIcon icon={faAdd} /> Add Product
                        </button>
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered table-hover">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products && products.slice().reverse().map(product => (
                                    <tr key={product.id}>
                                        <th scope="row">{product.id}</th>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>
                                            <button type="button" className="btn btn-info" style={{ marginRight: '5px' }} onClick={() =>openDetailModal(product.id)}>
                                                <FontAwesomeIcon icon={faEye} />
                                            </button>
                                            <button type="button" className="btn btn-warning" style={{ marginRight: '5px' }} onClick={() => openEditModal(product.id)}>
                                                <FontAwesomeIcon icon={faEdit} />
                                            </button>
                                            <button type="button" className="btn btn-danger" onClick={() => openDeleteModal(product.id)}>
                                                <FontAwesomeIcon icon={faTrashAlt} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Composants des modaux */}
                <AddProduct isOpen={isAddModalOpen} onClose={closeAddModal}  fetchData={fetchData} />
                <ProductDetail isOpen={isDetailModalOpen} onClose={closeDetailModal} productId={selectedProductId} />
                <EditProduct isOpen={isEditModalOpen}  onClose={handleCloseEditModal} productId={selectedProductId} fetchData={fetchData} />
                <DeleteProduct isOpen={isDeleteModalOpen} onClose={closeDeleteModal} productId={selectedProductId} fetchData={fetchData}  />
            </div>
        );
    };

    const mapStateToProps = state => ({
        products: state.products.products,
        loading: state.products.loading,
        error: state.products.error
    });
    

//     const mapStateToProps = (state) => {
//         return {
//                 products: state.products,
//         }
//     }
const mapDispatchToProps = dispatch => ({
        fetchProductsjdjdj: () => dispatch(fetchProducts()),
        
    }
    
    );
    
     
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
    