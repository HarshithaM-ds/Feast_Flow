import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NgoLogin = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Logging in...");

    try {
      const response = await fetch("http://localhost:8000/ngo/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Login successful!");
        // localStorage.setItem("token", data.token);
        // navigate("/ngo/dashboard"); // redirect after login
      } else {
        setMessage(`❌ ${data.detail || "Login failed"}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("❌ Server error");
    }
  };

  return (
    <div style={styles.container}>
      <h2>NGO Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="username"
          placeholder="Enter NGO username"
          value={formData.username}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
      <p style={styles.linkText}>
        Don’t have an account?{" "}
        <span
          onClick={() => navigate("/ngo/register")}
          style={styles.link}
        >
          Register here
        </span>
      </p>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "60px auto",
    padding: "25px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  message: {
    marginTop: "15px",
    fontWeight: "bold",
    color: "#555",
  },
  linkText: {
    marginTop: "10px",
    fontSize: "14px",
  },
  link: {
    color: "#007bff",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default NgoLogin;
