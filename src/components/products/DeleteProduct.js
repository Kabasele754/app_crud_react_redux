export const DeleteProduct = ({ isOpen, onClose }) => {
        return (
            <div>
                {isOpen && (
                    <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Product</h1>
                                    <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p>Are you sure you want to delete this product?</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };