import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Importing the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Recycling Platform</h1>
      <p>
        Recycle your electronics efficiently and sustainably, ensuring that valuable components like RAM, hard drives, and motherboard elements are repurposed for future use. By choosing IWB, you contribute to a greener planet, reduce electronic waste, and support cutting-edge recycling solutions that make technology more sustainable. Join us in pioneering eco-friendly innovations and shaping a cleaner, tech-driven future! ♻🌍
      </p>
      <Link to="/products">
        <button className="view-products-btn">View Products</button>
      </Link>
    </div>
  );
};

export default Home;
