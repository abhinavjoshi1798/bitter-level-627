import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "../CSS/productlist.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://obtainable-gray-tenor.glitch.me/allproducts")
      .then((response) => {
        setProducts(response.data);
        

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleProductDelete = (id) => {
    axios
      .delete(`https://obtainable-gray-tenor.glitch.me/allproducts/${id}`)
      .then(() => {
        setProducts((prevProducts) => {
          return prevProducts.filter((product) => product.id !== id);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={handleProductDelete}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
