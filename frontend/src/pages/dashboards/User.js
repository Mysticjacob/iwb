import React from "react";
import ProductList from "../../components/products/ProductList";
import Support from "../Support";
const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <h2>🛒 Welcome to IWB Recycling Marketplace</h2>
      <p>Explore sustainable products and log your queries below.</p>

      <section>
        <h3>♻ Available Recycling Products</h3>
        <ProductList />
      </section>

      <section>
        < Support/>
      </section>
    </div>
  );
};

export default UserDashboard;
