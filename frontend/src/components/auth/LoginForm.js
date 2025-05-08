import { useState } from "react";
import axios from "axios";

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      const { data } = await axios.post("https://iwb-2213.vercel.app/api/auth/login", { email, password });

      // Save token to localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role); // Save role if needed

      setError("");
      onLoginSuccess(); // Notify parent component
    } catch (err) {
      const msg = err.response?.data?.message || "Server error. Please try again.";
      setError(msg);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
