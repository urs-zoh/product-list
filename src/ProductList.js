import React, { useState } from 'react';

const ProductList = () => {
  // Initial product list
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', brand: 'Dell', price: 1000 },
    { id: 2, name: 'Smartphone', brand: 'Samsung', price: 800 },
    { id: 3, name: 'Headphones', brand: 'Sony', price: 200 },
  ]);

  // New product state
  const [newProduct, setNewProduct] = useState({
    name: '',
    brand: '',
    price: '',
  });

  // Function to handle input changes for new product
  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  // Function to add a product
  const addProduct = () => {
    if (newProduct.name && newProduct.brand && newProduct.price) {
      setProducts([
        ...products,
        {
          id: products.length + 1,
          name: newProduct.name,
          brand: newProduct.brand,
          price: Number(newProduct.price),
        },
      ]);
      setNewProduct({ name: '', brand: '', price: '' }); // Clear form
    }
  };

  // Function to delete a product
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Function to update a product
  const updateProduct = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, ...newProduct } : product
    );
    setProducts(updatedProducts);
    setNewProduct({ name: '', brand: '', price: '' }); // Clear form
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - {product.brand} - ${product.price}
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
            <button onClick={() => updateProduct(product.id)}>Update</button>
          </li>
        ))}
      </ul>

      <h2>Add/Update Product</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={newProduct.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Brand"
        name="brand"
        value={newProduct.brand}
        onChange={handleInputChange}
      />
      <input
        type="number"
        placeholder="Price"
        name="price"
        value={newProduct.price}
        onChange={handleInputChange}
      />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default ProductList;
