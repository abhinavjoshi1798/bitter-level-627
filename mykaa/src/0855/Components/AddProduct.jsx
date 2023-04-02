import React, { useState } from "react";
// import '../CSS/addproduct.css';
function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    quantity: 0,
    rating: 4.5,
    rating_count: 20774,
    brand_name: "",
    tracking_metadata: {
      es_score: 0,
      popularity: 0,
    },
    media: [
      { type: "image", url: "" },
      { type: "image", url: "" },
      { type: "image", url: "" },
      { type: "image", url: "" },
    ],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://obtainable-gray-tenor.glitch.me/allproducts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
      alert("Product added successfully!");
      
  };

  return (<div className="addContainer">
  <h2>Add Product</h2>
    <form onSubmit={handleSubmit} className="addpdct">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={product.price}
          onChange={(e) =>
            setProduct({ ...product, price: parseFloat(e.target.value) })
          }
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={product.quantity}
          onChange={(e) =>
            setProduct({ ...product, quantity: parseFloat(e.target.value) })
          }
        />
      </div>
      
      <div>
        <label htmlFor="brand_name">Brand Name:</label>
        <input
          type="text"
          id="brand_name"
          value={product.brand_name}
          onChange={(e) =>
            setProduct({ ...product, brand_name: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="es_score">ES Score:</label>
        <input
          type="number"
          id="es_score"
          value={product.tracking_metadata.es_score}
          onChange={(e) =>
            setProduct({
              ...product,
              tracking_metadata: {
                ...product.tracking_metadata,
                es_score: parseFloat(e.target.value),
              },
            })
          }
        />
      </div>
      <div>
        <label htmlFor="popularity">Popularity:</label>
        <input
          type="number"
          id="popularity"
          value={product.tracking_metadata.popularity}
          onChange={(e) =>
            setProduct({
              ...product,
              tracking_metadata: {
                ...product.tracking_metadata,
                popularity: parseFloat(e.target.value),
              },
            })
          }
        />
      </div>
      <div>
        <label htmlFor="img1">Image 1:</label>
        <input
          type="text"
          id="img1"
          value={product.media[0].url}
          onChange={(e) =>
            setProduct({
              ...product,
              media: [
                { type: "image", url: e.target.value },
                product.media[1],
                product.media[2],
                product.media[3],
              ],
            })
          }
        />
      </div>
      <div>
        <label htmlFor="img2">Image 2:</label>
        <input
          type="text"
          id="img2"
          value={product.media[1].url}
          onChange={(e) =>
            setProduct({
              ...product,
              media: [
                product.media[0],
                { type: "image", url: e.target.value },
                product.media[2],
                product.media[3],
              ],
            })
          }
        />
      </div>
      <div>
  <label htmlFor="img3">Image 3:</label>
  <input
    type="text"
    id="img3"
    value={product.media[2].url}
    onChange={(e) =>
      setProduct({
        ...product,
        media: [
          product.media[0],
          product.media[1],
          { type: "image", url: e.target.value },
          product.media[3],
        ],
      })
    }
  />
</div>
<div>
  <label htmlFor="img4">Image 4:</label>
  <input
    type="text"
    id="img4"
    value={product.media[3].url}
    onChange={(e) =>
      setProduct({
        ...product,
        media: [
          product.media[0],
          product.media[1],
          product.media[2],
          { type: "image", url: e.target.value },
        ],
      })
    }
  />
</div>
<button type="submit">Add Product</button>
</form></div>

  );
}

export default AddProduct;
