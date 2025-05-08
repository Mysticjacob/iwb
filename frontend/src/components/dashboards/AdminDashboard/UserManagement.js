import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./ProductManager.css";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const fetchUsers = useCallback(async () => {
    if (!token) {
      alert("Authentication token is missing.");
      return;
    }
    try {
      const response = await axios.get("https://iwb-2213.vercel.app/api/admin/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error.response?.data?.message || error.message);
    }
  }, [token]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleAddUser = async () => {
    if (!token) return alert("You are not authenticated.");
    try {
      setLoading(true);
      await axios.post("https://iwb-2213.vercel.app/api/admin/users", newUser, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("User added successfully!");
      setNewUser({ name: "", email: "", password: "", role: "user" });
      fetchUsers();
    } catch (error) {
      alert("Error adding user: " + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    if (!token) return alert("You are not authenticated.");

    try {
      await axios.delete(`https://iwb-2213.vercel.app/api/admin/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("User deleted successfully!");
      fetchUsers();
    } catch (error) {
      alert("Error deleting user: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>

      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={newUser.password}
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
      />
      <select
        value={newUser.role}
        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="developer">Developer</option>
        <option value="finance">Finance</option>
        <option value="sales">Sales</option>
      </select>
      <button onClick={handleAddUser} disabled={loading}>
        {loading ? "Adding..." : "Add User"}
      </button>

      <h3>Existing Users</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
