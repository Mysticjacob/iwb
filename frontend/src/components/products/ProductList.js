import React, { useState, useEffect } from "react";
import axios from "axios";
import Cart from "../../pages/Cart";
import "./ProductList.css"; // Importing CSS

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("https://iwb-2213.vercel.app/api/products");
        console.log("Fetched Products Data:", data); // Debugging to check image property
        setProducts(data);
      } catch (error) {
        console.error("❌ Error fetching products:", error);
        setError("❌ Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]); // ✅ Add item to cart
    alert(`${product.name} added to cart!`);
  };

  const handleCheckout = () => {
    alert("✅ Checkout processing...");
    // Redirect to payment gateway or backend checkout process
  };

  if (loading) return <p className="loading">⏳ Loading products...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="product-list-container">
      <h2>Available Recycling Products</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <img
                  src={product.image || product.imageUrl || "/images/placeholder.png"}
                  alt={product.name}
                  className="product-image"
                />
              </td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                <button className="add-cart-btn" onClick={() => addToCart(product)}>🛒 Add to Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Link to Checkout Page */}
      <Cart cartItems={cart} handleCheckout={handleCheckout} />
    </div>
  );
};

export default ProductList;
