import React, { useState } from 'react';
import '../CSS/addproduct.css'

function AddProduct() {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
formData.append('name', name);
formData.append('brand_name', brand);
formData.append('price', price);
formData.append('description', description);
formData.append('image_url', image);

    fetch('https://obtainable-gray-tenor.glitch.me/allproducts', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="add-product-container">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-row">
          <label htmlFor="product-name" className="form-label">Name:</label>
          <input type="text" value={name} onChange={handleNameChange} className="form-input" id="product-name" />
        </div>
        <div className="form-row">
          <label htmlFor="product-brand" className="form-label">Brand:</label>
          <input type="text" value={brand} onChange={handleBrandChange} className="form-input" id="product-brand" />
        </div>
        <div className="form-row">
          <label htmlFor="product-price" className="form-label">Price:</label>
          <input type="number" value={price} onChange={handlePriceChange} className="form-input" id="product-price" />
        </div>
        <div className="form-row">
          <label htmlFor="product-description" className="form-label">Description:</label>
          <textarea value={description} onChange={handleDescriptionChange} className="form-input" id="product-description"></textarea>
        </div>
        <div className="form-row">
          <label htmlFor="product-image" className="form-label">Image:</label>
          <input type="file" onChange={handleImageChange} className="form-input" id="product-image" />
        </div>
        <button type="submit" className="form-button">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
