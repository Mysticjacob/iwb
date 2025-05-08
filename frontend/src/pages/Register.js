import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // No default role

  const handleRegister = async () => {
    if (!role) {
      alert("Please select a role before registering.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/auth/register", { name, email, password, role });
      alert("Registration successful! Please log in.");
    } catch (error) {
      alert("Registration failed!");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      
      <select onChange={(e) => setRole(e.target.value)} required>
        <option value="" disabled selected>Select your role</option>
        <option value="admin">Admin</option>
        <option value="finance">Finance</option>
        <option value="developer">Developer</option>
        <option value="sales">Sales</option>
      </select>
      
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
