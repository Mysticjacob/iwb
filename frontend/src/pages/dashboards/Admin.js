import React from "react";
import UserManagement from "../../components/dashboards/AdminDashboard/UserManagement";
import ProductManager from "../../components/dashboards/AdminDashboard/AccessControl";



const Admin = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <UserManagement />
      <ProductManager />
      
    </div>
  );
};

export default Admin;
