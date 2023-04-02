import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/productcard.css'

const ProductCard = ({ product, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleting(true);
    onDelete(product.id);
  };

  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={product.media[0].url} alt={product.name} />
      </div>
      <div className="product-card-body">
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-brand">{product.brand_name}</p>
        <p className="product-card-price">${product.price}</p>
        
        <div className="product-card-actions">
          <Link to={`/admin/products/${product.id}/edit`} className="editbutton">
            Edit
          </Link>
          <button className="button" onClick={handleDeleteClick} disabled={isDeleting}>
            {isDeleting ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
};


export default ProductCard;