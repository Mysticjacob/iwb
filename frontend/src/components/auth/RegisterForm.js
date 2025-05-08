import { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("sales"); // Default role

  const handleRegister = async () => {
    try {
      await axios.post("https://iwb-2213.vercel.app/api/auth/register", { name, email, password, role });
      alert("Registration successful! Please log in.");
    } catch (error) {
      alert("Registration failed: " + error.response?.data?.message || "Server error");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <select onChange={(e) => setRole(e.target.value)}>
        <option value="sales">Sales</option>
        <option value="finance">Finance</option>
        <option value="developer">Developer</option>
        <option value="investor">Investor</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterForm;
