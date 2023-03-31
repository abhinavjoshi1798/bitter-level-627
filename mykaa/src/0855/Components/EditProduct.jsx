import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const EditProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    brand: '',
    price: '',
    description: '',
    image: '',
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://obtainable-gray-tenor.glitch.me/allproducts/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error(error));
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetch(`https://obtainable-gray-tenor.glitch.me/allproducts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    })
      .then(() => {})
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={product.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            name="brand"
            id="brand"
            value={product.brand_name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            id="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            value={product.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="text"
            name="image"
            id="image"
            value={product.image_url}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Save</button>
        <NavLink to="/" className="cancel-btn">
          Cancel
        </NavLink>
      </form>
    </div>
  );
};

export default EditProduct;
