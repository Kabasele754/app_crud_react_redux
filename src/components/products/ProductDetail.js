export const ProductDetail = ({ isOpen, onClose }) => {
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
                                <div className="modal-body">
                                    {/* Contenu du détail du produit */}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };