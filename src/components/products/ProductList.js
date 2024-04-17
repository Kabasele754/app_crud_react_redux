import { AddProduct } from "./AddProduct";
import { useState } from "react";
import { ProductDetail } from "./ProductDetail";
import { EditProduct } from "./EditProduct";
import { DeleteProduct } from "./DeleteProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faEye, faAdd } from '@fortawesome/free-solid-svg-icons';


export const ProductList = () => {
        const [isAddModalOpen, setIsAddModalOpen] = useState(false);
        const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
        const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    
        const openAddModal = () => {
            setIsAddModalOpen(true);
        };
    
        const closeAddModal = () => {
            setIsAddModalOpen(false);
        };
    
        const openDetailModal = () => {
            setIsDetailModalOpen(true);
        };
    
        const closeDetailModal = () => {
            setIsDetailModalOpen(false);
        };


        const openEditModal = () => {
                setIsEditModalOpen(true);
            };
        
        const closeEditModal = () => {
        setIsEditModalOpen(false);
        };
        
        const openDeleteModal = () => {
        setIsDeleteModalOpen(true);
        };
        
        const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        };
    
        return (
            <div>
                <br></br>
                <div className="card">
                    <div className="card-header float-right">
                        <button type="button" className="btn btn-primary" onClick={openAddModal}>
                        <FontAwesomeIcon icon={faAdd} ></FontAwesomeIcon> Add Product
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
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td >
                                        <button type="button" className="btn btn-info " style={{ marginRight: '5px' }} onClick={openDetailModal}>
                                        <FontAwesomeIcon icon={faEye} /></button>
                                        <button type="button" className="btn btn-warning " style={{ marginRight: '5px' }} onClick={openEditModal}>
                                        <FontAwesomeIcon icon={faEdit} /> 
                                    </button>
                                    <button type="button" className="btn btn-danger " onClick={openDeleteModal}>
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <AddProduct isOpen={isAddModalOpen} onClose={closeAddModal} />
                <ProductDetail isOpen={isDetailModalOpen} onClose={closeDetailModal} />
                <EditProduct isOpen={isEditModalOpen} onClose={closeEditModal} />
                <DeleteProduct isOpen={isDeleteModalOpen} onClose={closeDeleteModal} />
            </div>
        );
    };
    